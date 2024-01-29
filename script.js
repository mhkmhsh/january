const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");
const changeText = document.getElementById("changeText")
let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    myImg.src = "images/romanovs.jpg";
  } else {
    myImg.src = "images/ro2.jpg";
    changeText.textContent = "It was commited by the Bolsheviks"
  }
  isFirstImage = !isFirstImage;
});