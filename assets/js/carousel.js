document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-carousel-button]");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const carousel = button.closest("[data-carousel]");
        const slides = carousel.querySelector("[data-slides]");
  
        const activeSlide = slides.querySelector("[data-active]") || slides.firstElementChild;
        const slideWidth = activeSlide.offsetWidth;
  
        let currentIndex = Array.from(slides.children).indexOf(activeSlide);
        let newIndex = (currentIndex + offset + slides.children.length) % slides.children.length;
  
        if (newIndex < 0) {
          newIndex = slides.children.length - 1; // If navigating left from the first image, show the last image
        }
  
        slides.style.transform = `translateX(${-newIndex * slideWidth}px)`;
  
        Array.from(slides.children).forEach((slide, index) => {
          if (index === newIndex) {
            slide.dataset.active = "true";
          } else {
            delete slide.dataset.active;
          }
        });
      });
    });
  });
  
  
  
   
  