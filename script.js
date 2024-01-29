const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    myImg.src = "images/romanovs.jpg";
  } else {
    myImg.src = "images/ro2.jpg";
  }
  isFirstImage = !isFirstImage;
});