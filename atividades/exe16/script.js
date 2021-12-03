let slideIndex = 0;

const currentSlide = ()=> {
    showSlides(slideIndex);
  }

const showSlides = ()=>{

  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  //setTimeout(showSlides, 2000);
}


showSlides();
