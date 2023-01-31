const audio = new Audio("https://www.aimeerivers.com/push-the-button/audio/button.mp3");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  audio.play();
});
