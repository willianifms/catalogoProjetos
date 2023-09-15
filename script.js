const cryptoCard = document.getElementById("cryptoCard");
const priceElement = document.getElementById("price");

// Simulate fetching cryptocurrency data
setTimeout(() => {
  cryptoCard.style.display = "block";
  priceElement.style.animation = "pulse 2s infinite"; // Ativar animação de pulsação
}, 2000);
