const linkContainer$ = document.getElementById("linkContainer");
const link = document.getElementById("link");
const label = document.getElementById("label");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  var labelText = label.value;
  if(labelText) {
    var settings = {};
    settings.label = labelText;
    var settingsString = JSON.stringify(settings);
    var settingsEncoded = btoa(settingsString);
    console.log(settingsEncoded);
    link.href="../?s=" + settingsEncoded;
    linkContainer.style.display="block";
  } 
});
