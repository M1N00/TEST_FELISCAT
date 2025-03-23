//ICI C'EST FIREBASE
 
// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvDA-ZKxv4NI9ukVOp3PKh6aK4FgRnfJU",
    authDomain: "bdd-pour-feliscat.firebaseapp.com",
    projectId: "bdd-pour-feliscat",
    storageBucket: "bdd-pour-feliscat.firebasestorage.app",
    messagingSenderId: "515873784145",
    appId: "1:515873784145:web:12e18eeea0d4dbbc251370"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Upload = document.getElementById('uploadButton');

Upload.addEventListener('click', () => {
    // Fonction pour uploader un fichier vers Firebase Storage
    async function uploadFile() {
        console.log(document.getElementById("adresse").value);

        const fileInput = document.getElementById("fileInput");
        if (!fileInput || fileInput.files.length === 0) {
            console.error("Aucun fichier sélectionné.");
            return;
        }

        const file = fileInput.files[0];
        const storageRef = ref(storage, `uploads/${localStorage.getItem("userEmail")}/${sessionId}/${document.getElementById("adresse").value} (${new Date().toLocaleDateString().replace(/\//g, ',')})/${file.name}`); // Stocke le fichier dans le dossier "uploads" puis dans un dossier spécifique à l'utilisateur
        
        if(document.getElementById("adresse").value != "") {
        
                try {
                    const snapshot = await uploadBytes(storageRef, file);
                    console.log("Upload réussi !", snapshot);
                    
                    // Récupérer l'URL du fichier stocké
                    const url = await getDownloadURL(snapshot.ref);
                    console.log("URL du fichier :", url);

                    SendMailToBOT(url,document.getElementById("adresse").value,sessionId);
                } catch (error) {
                    console.error("Erreur lors de l'upload :", error);
                }
        }

    }

    uploadFile();
});


//ICI C'EST STRIPE

// Récupérer l'ID de session depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get("session_id");

if (sessionId) {
    console.log("Session ID trouvé :", sessionId);
} else {
    console.error("Aucun session_id trouvé dans l'URL !");
    // Rediriger vers une page d'erreur ou afficher un message d'erreur
    alert("Aucun session_id trouvé dans l'URL !");
}

//ICI C'EST MAILJS

function SendMailToBOT(ImageURL,adresse,sessionId) {
    // Initialiser EmailJS avec ton USER ID
    emailjs.init('u0luYOls1ADrXhG0M'); // Remplace par ton vrai USER ID

    // Paramètres du template
    const templateParams = {
        Image_link: ImageURL,
        ADRESSE: adresse,
        ID_STRIPE: sessionId
    };

    // Envoyer l'email automatiquement au chargement
    emailjs.send('service_5djo6mt', 'template_c1cn5ho', templateParams)
        .then(function(response) {
            console.log('✅ Email envoyé !', response.status, response.text);
        })
        .catch(function(error) {
            console.error('❌ Erreur lors de l\'envoi', error);
        });
}