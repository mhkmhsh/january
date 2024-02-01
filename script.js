const myImg = document.getElementById("myImg");


const myButton = document.getElementById("myButton");


const myWar = document.getElementById("myWar");


const myPotsdam = document.getElementById("myPotsdam");


const myBirth = document.getElementById("myBirth");


const myDay = document.getElementById("myDay");

const ferrari = document.getElementById("ferrari")

const jupiter = document.getElementById("jupiter");

const moon = document.getElementById("moon");

const changeText = document.getElementById("changeText");

const textC = document.getElementById("textC");

const textCh = document.getElementById("textCh");

const textCha = document.getElementById("textCha");

const textChan = document.getElementById("textChan");

let isFirstImage = true;

myButton.addEventListener("click", function () {
  if (isFirstImage) {
    myImg.src = "images/romanovs.jpg";
  } else {
    myImg.src = "images/ro2.jpg";
    changeText.textContent = "It was commited by the Bolsheviks"
  }
  isFirstImage = !isFirstImage;
});


myPotsdam.addEventListener("click", function () {
  if (isFirstImage) {
    myWar.src = "images/potsdam.webp";
  } else {
    myWar.src = "images/war.jpg";
    textC.textContent = "It took place in Berlin"
    textC.textContent = "It took place in Berlin"
  }
  isFirstImage = !isFirstImage;
});



myDay.addEventListener("click", function () {
  if (isFirstImage) {
    myBirth.src = "images/lilbaby.jpg";
  } else {
    myBirth.src = "images/datme.jpg";
    textCh.textContent = "I was a grump"
  }
  isFirstImage = !isFirstImage;
});

ferrari.addEventListener("click", function () {
  if (isFirstImage) {
    julesBianchi.src = "images/jules-bianchi.jpg";
  } else {
    julesBianchi.src = "images/jules.webp";
    textCha.textContent = "His godson Charles races for Ferrari now."
  }
  isFirstImage = !isFirstImage;
});

jupiter.addEventListener("click", function () {
  if (isFirstImage) {
    moon.src = "images/jupiter.jpg";
  } else {
    moon.src = "images/moons.webp";
    textChan.textContent = "12 new moons were found"
  }
  isFirstImage = !isFirstImage;
});