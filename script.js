const myImg = document.getElementById("myImg");


const myButton = document.getElementById("myButton");


const myWar = document.getElementById("myWar");


const myPotsdam = document.getElementById("myPotsdam");


const myBirth = document.getElementById("myBirth");


const myDay = document.getElementById("myDay");

const changeText = document.getElementById("textChange");

const textCha = document.getElementById("textC");

const flip = document.getElementById("textCh");

const flipAgain = document.getElementById("textCha");

const fliprepeat = document.getElementById("textChan");

const jupiter = document.getElementById("jupiter");

const moon = document.getElementById("moon");


const julesBianchi = document.getElementById("julesBianchi");


const ferrari = document.getElementById("ferrari");

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
    textCha.textContent = "It took place in Berlin"
  }
  isFirstImage = !isFirstImage;
});



myDay.addEventListener("click", function() {
  if (isFirstImage) {
    myBirth.src = "images/lilbaby.jpg";
  } else {
    myBirth.src = "images/datme.jpg";
    flip.textContent = "I was a grump"
  }
  isFirstImage = !isFirstImage;
});


ferrari.addEventListener("click", function() {
  if (isFirstImage) {
    julesBianchi.src = "images/jules-bianchi.jpg";
  } else {
    julesBianchi.src = "images/jules.webp";
    flipAgain.textContent = "His godson Charles races for Ferrari now."
  }
  isFirstImage = !isFirstImage;
});


moon.addEventListener("click", function() {
  if (isFirstImage) {
    jupiter.src = "images/jupe.webp";
  } else {
    jupiter.src = "images/jupiter.jpg";
    fliprepeat.textContent = "His godson Charles races for Ferrari now."
  }
  isFirstImage = !isFirstImage;
});