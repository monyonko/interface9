let j = 0;
const time = 3000;
const slides = document.getElementsByClassName("slideshow");

const dots = document.getElementsByClassName("dot");
const icon = document.getElementsByClassName("search")[0];
const searchInput =  document.getElementsByTagName('form')[0];
searchInput.style.display = "none"

function search(){
    searchInput.style.display="unset"
    icon.style.display="none";
}
 

let slideIndex = 1;
showSlides(slideIndex);

function nextImage(n) {
  showSlides(slideIndex += n);
}

function currentImage(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  
}
//change image 
setInterval(function() { 
    $('.carousel > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.carousel');   
  }, 3000);

