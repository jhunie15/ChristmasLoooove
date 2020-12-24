var started = false;

function christmasSong(){
var audio = new Audio("christmas.mp3");
audio.play();
}

$(document).click(function(){
  if(!started){
    
    christmasSong();
    animatePress();    

    started = true;
  }
});
function animatePress(){
  var header = document.querySelector("h1");
  header.classList.add("head-lights");

  var our = document.querySelectorAll(".our-image");
  for (var i = 0; i < our.length; i++){
  our[i].classList.add("image-lights");
  }

  var xmas = document.querySelectorAll(".christmas-image");
  for (var i = 0; i < xmas.length; i++){
  xmas[i].classList.add("image-lights");
  }
  var bod = document.querySelector("body");
  bod.classList.add("body-lights");

  var background1 = document.querySelector("#head");
  background1.classList.add("body-lights");

  var background2 = document.querySelector("#lights");
  background2.classList.add("body-lights");


  var myCarousel = document.querySelector('#christmasCarousel')
  var carousel = new bootstrap.Carousel(christmasCarousel, {
    interval: 1000
  });
}
