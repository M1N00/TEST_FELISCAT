//ICI C TOUT LE BORDEL AVEC STRIPE

const achat = document.getElementById('ACHETER');
const user = document.getElementById('User');

console.log("email : ");
console.log(localStorage.getItem("userEmail"));
achat.addEventListener('click', () => {
  if(localStorage.getItem("userEmail") != null && localStorage.getItem("userEmail") != "null") {
    console.log("email trouvé");
      //Ceci redirige l'utilisateur vers la page de paiement
      window.location.href = 'https://buy.stripe.com/6oEg06duo1N49BSdQQ';
  }
  else{
    console.log("email non trouvé");
    window.location.href = 'AuthTest.html';
  }
});

user.addEventListener('click', () => {
  window.location.href = 'AuthTest.html';
});
