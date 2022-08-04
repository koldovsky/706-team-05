(function () {
    
    const slides = [
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-commercial-img" src="./img/sectors-commercial.png" alt="hi-tech blue commercial house">
                    <p class="sectors-overview-slide-header">Commercial</p>
                    <p class="sectors-overview-slide-content">We are experts in designing and building commercial objects.</p>
                    <a class="sectors-overview-learn-more" href="#">Learn more<span class="sectors-overview-learn-more-arrow">  &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-interiors-img" src="./img/sectors-interiors.png" alt="cozy open kitchen with wooden floor, comfort sofa and big black fridge">
                    <p class="sectors-overview-slide-header">Interiors</p>
                    <p class="sectors-overview-slide-content">Need a unique interior design? We can turn any idea into reality.</p>
                    <a class="sectors-overview-learn-more" href="#">Learn more<span class="sectors-overview-learn-more-arrow">  &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-residential-img" src="./img/sectors-residential.png" alt="beautiful residential house">
                    <p class="sectors-overview-slide-header">Residential</p>
                    <p class="sectors-overview-slide-content">We are proud to build dream houses to our community.</p>
                    <a class="sectors-overview-learn-more" href="#">Learn more<span class="sectors-overview-learn-more-arrow">  &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-civic-img" src="./img/sectors-civil.png" alt="beautiful old-fashioned stone cultural building">
                    <p class="sectors-overview-slide-header">Civic and Cultural</p>
                    <p class="sectors-overview-slide-content">We are happy to build public spaces that can make an impact.</p>
                    <a class="sectors-overview-learn-more" href="#">Learn more<span class="sectors-overview-learn-more-arrow">  &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-healthcare-img" src="./img/sectors-healthcare.png" alt="modern glass building">
                    <p class="sectors-overview-slide-header">Healthcare</p>
                    <p class="sectors-overview-slide-content">We build hospitals, first-aid stations, and other objects.</p>
                    <a class="sectors-overview-learn-more" href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
                </div>`,
                `<div class="sectors-overview-slide">
                    <img class="sectors-overview-slide-government-img" src="./img/sectors-government.png" alt="government headquaters">
                    <p class="sectors-overview-slide-header">Government</p>
                    <p class="sectors-overview-slide-content">We provide professional services to the federal government.</p>
                    <a class="sectors-overview-learn-more" href="#">Learn more<span class="sectors-overview-learn-more-arrow"> &#8594;</span></a>
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
        if (window.innerWidth > 900) {
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