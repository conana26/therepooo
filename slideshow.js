document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider'); // Select the slider container
  const slides = slider.querySelectorAll('img'); // Select all the slides (images)
  let currentIndex = 0; // Track the current slide index

  function autoSlide() {
      currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide when reaching the end
      const scrollAmount = slider.scrollWidth / slides.length; // Calculate the width of each slide
      slider.scrollTo({
          left: currentIndex * scrollAmount, // Scroll to the calculated position
          behavior: 'smooth', // Smooth transition
      });
  }

  // Automatically slide every 3 seconds
  setInterval(autoSlide, 3000);
});


let autoSlide = setInterval(moveToNextSlide, 3000);

slider.addEventListener("mouseover", () => clearInterval(autoSlide));
slider.addEventListener("mouseout", () => {
    autoSlide = setInterval(moveToNextSlide, 3000);
});
