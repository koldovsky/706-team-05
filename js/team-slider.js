(function () {
  const slides = [
    `<div class="slide-img">
      <img src="./img/giffels-logo.svg" alt="Giffels Logo" />
      </div>`,
    `<div class="slide-img">
      <img src="./img/cca-logo.svg" alt="Canadian Construction Association Logo" />
    </div>`,
    `<div class="slide-img">
      <img src="./img/bcca-logo.svg" alt="British Columbia Construction Association Logo" />
    </div>`,
    `<div class="slide-img">
      <img src="./img/wsp-logo.svg" alt="WSP Logo" />
    </div>`,
    `<div class="slide-img">
      <img src="./img/aecom-logo.svg" alt="AECOM Logo" />
    </div>`,
    `<div class="slide-img">
      <img src="./img/interior-logo.svg" alt="Interior Logo" />
    </div>`,
  ];

  const prevBtn = document.querySelector(".slider-prev-btn");
  prevBtn.addEventListener("click", prevButton);

  const nextBtn = document.querySelector(".slider-next-btn");
  nextBtn.addEventListener("click", nextButton);

  let currentSlideIndex = 0;

  function slidesRender() {
    const slideContainer = document.querySelector(".slides-container");
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.innerWidth > 600) {
      const secondSlideIndex =
        currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
      slideContainer.innerHTML += slides[secondSlideIndex];
      if (window.innerWidth > 768) {
        const thirdSlideIndex =
          secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
        slideContainer.innerHTML += slides[thirdSlideIndex];
        if (window.innerWidth > 1000) {
          const fourthSlideIndex =
            thirdSlideIndex + 1 >= slides.length ? 0 : thirdSlideIndex + 1;
          slideContainer.innerHTML += slides[fourthSlideIndex];
          if (window.innerWidth > 1200) {
            const fifthSlideIndex =
              fourthSlideIndex + 1 >= slides.length ? 0 : fourthSlideIndex + 1;
            slideContainer.innerHTML += slides[fifthSlideIndex];
          }
        }
      }
    }
  }

  function prevButton() {
    currentSlideIndex =
      currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
    slidesRender();
  }

  function nextButton() {
    currentSlideIndex =
      currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    slidesRender();
  }

  slidesRender();

  window.addEventListener("resize", slidesRender);
})();
