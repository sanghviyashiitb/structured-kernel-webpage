let slideIndex = 1;
showSlides(1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-comp-overlay");
  let slides2 = document.getElementsByClassName("img-comp");
  let slider = document.getElementsByClassName("img-comp-slider");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides2[i].style.display = "none";
    slider[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  slides2[slideIndex-1].style.display = "block";
  slider[slideIndex-1].style.display = "block";
}