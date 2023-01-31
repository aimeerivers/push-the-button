const audio = new Audio("../audio/button.mp3");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  audio.play();
});
