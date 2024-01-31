const myImg = document.getElementById("myImg");


const myButton = document.getElementById("myButton");


const myWar = document.getElementById("myWar");


const myPotsdam = document.getElementById("myPotsdam");


const myBirth = document.getElementById("myBirth");


const myDay = document.getElementById("myDay");


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



myDay.addEventListener("click", function() {
  if (isFirstImage) {
    myBirth.src = "images/lilbaby.jpg";
  } else {
    myBirth.src = "images/datme.jpg";
    changeText.textContent = "I was a grump"
  }
  isFirstImage = !isFirstImage;
});