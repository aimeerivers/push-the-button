const audio = new Audio("https://www.aimeerivers.com/push-the-button/audio/button.mp3");
const button = document.getElementById("button");
const label = document.getElementById("label");

button.addEventListener("click", () => {
  audio.play();
});

label.textContent="Push me now!";
