//ICI C TOUT LE BORDEL AVEC STRIPE

const button = document.getElementById('ACHETER');

console.log("email : ");
console.log(localStorage.getItem("userEmail"));
button.addEventListener('click', () => {
  if(localStorage.getItem("userEmail") != null){
    console.log("email trouvé");
      //Ceci redirige l'utilisateur vers la page de paiement
      window.location.href = 'https://buy.stripe.com/6oEg06duo1N49BSdQQ';
  }
  else{
    console.log("email non trouvé");
    window.location.href = 'AuthTest.html';
  }
});


