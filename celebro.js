const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

// if (currentHour >= 5 && currentHour < 12) {
//   greetingElement.textContent = "Bom dia";
// } else if (currentHour >= 12 && currentHour < 18) {
//   greetingElement.textContent = "Boa tarde";
// } else {
//   greetingElement.textContent = "Boa noite";
// }

// Forma que eu não sabia. 
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;
