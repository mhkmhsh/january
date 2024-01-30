const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");
const myWar = document.getElementById("myWar");
const myPotsdam = document.getElementById("myPotsdam");
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

myPotsdam.addEventListener("click", function() {
  if (isFirstImage) {
    myWar.src = "images/potsdam.webp";
  } else {
    myWar.src = "images/war.jpg";
    changeText.textContent = "It took place in Berlin"
  }
  isFirstImage = !isFirstImage;
});