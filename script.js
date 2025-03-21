//ICI C TOUT LE BORDEL AVEC STRIPE

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Configuration Firebase
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
const auth = getAuth(app);

const button = document.getElementById('ACHETER');

button.addEventListener('click', () => {
  // Vérifie si l'utilisateur est authentifié
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Utilisateur authentifié, redirige vers la page de paiement
      window.location.href = 'https://buy.stripe.com/6oEg06duo1N49BSdQQ';
    } else {
      // Utilisateur non authentifié, redirige vers la page d'authentification
      window.location.href = 'AuthTest.html';
    }
  });
});


