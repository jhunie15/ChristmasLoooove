var started = false;

function christmasSong(){
var audio = new Audio("sounds/christmas.mp3");
audio.play();
}

$(document).click(function(){
  if(!started){
    christmasSong();
    started = true;
  }
});

var myCarousel = document.querySelector('#christmasCarousel')
var carousel = new bootstrap.Carousel(christmasCarousel, {
  interval: 1000
});
