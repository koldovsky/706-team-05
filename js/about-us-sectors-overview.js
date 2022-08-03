(function () {
    
    const slides = [
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-commercial-img" src="./img/sectors-commercial.png" alt="hi-tech blue commercial house">
                    <h3 class="sectors-overview-slide-commercial-header">Commercial</h3>
                    <p class="sectors-overview-slide-commercial-content">We are experts in designing and building commercial objects.</p>
                    <a href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-interiors-img" src="./img/sectors-interiors.png" alt="cozy open kitchen with wooden floor, comfort sofa and big black fridge">
                    <h3 class="sectors-overview-slide-interiors-header">Interiors</h3>
                    <p class="sectors-overview-slide-interiors-content">Need a unique interior design? We can turn any idea into reality.</p>
                    <a href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-residential-img" src="./img/sectors-residential.png" alt="beautiful residential house">
                    <h3 class="sectors-overview-slide-residential-header">Residential</h3>
                    <p class="sectors-overview-slide-residential-content">We are proud to build dream houses to our community.</p>
                    <a href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-civic-img" src="./img/sectors-civil.png" alt="beautiful old-fashioned stone cultural building">
                    <h3 class="sectors-overview-slide-civic-header">Civic and Cultural</h3>
                    <p class="sectors-overview-slide-civic-content">We are happy to build public spaces that can make an impact.</p>
                    <a href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-healthcare-img" src="./img/sectors-healthcare.png" alt="modern glass building">
                    <h3 class="sectors-overview-slide-healthcare-header">Healthcare</h3>
                    <p class="sectors-overview-slide-healthcare-content">We build hospitals, first-aid stations, and other objects.</p>
                    <a href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-government-img" src="./img/sectors-government.png" alt="government headquaters">
                    <h3 class="sectors-overview-slide-government-header">Government</h3>
                    <p class="sectors-overview-slide-government-content">We provide professional services to the federal government.</p>
                    <a href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
    const slideContainer = document.querySelector('.sectors-overview-slides-container')
    slideContainer.innerHTML = slides[currentSlideIdx]; 
    if (window.innerWidth > 680) {
        const secondSlideIdx = 
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 800) {
          const thirdSlideIdx =
            secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
          slideContainer.innerHTML += slides[thirdSlideIdx];
          if (window.innerWidth > 1000) {
            const fourthSlideIdx =
              thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += slides[fourthSlideIdx];
        }
    }
}
}

const prevBtn = document.querySelector(".sectors-overview-slider-prev-btn");
prevBtn.addEventListener('click', prevButton);

const nextBtn = document.querySelector(".sectors-overview-slider-next-btn");
nextBtn.addEventListener('click', nextButton);

function prevButton() {
    currentSlideIdx =
currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderCarousel();
  }

  function nextButton() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      renderCarousel();
  }

  renderCarousel();

  window.addEventListener('resize', renderCarousel);

})();