const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let currentSlide = 0;

function showSlide(index) {
  slideContainer.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

arrowLeft.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

arrowRight.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);