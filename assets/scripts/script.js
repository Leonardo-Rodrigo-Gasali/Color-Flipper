/* Colores */
const colors = ["blue", "red", "rgba(133,122,200)", "#f15025", "#e389b9", "#ffce30"];
/* ID btn */
const btn = document.getElementById("btn");
/* Class */
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
