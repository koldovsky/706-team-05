(function () {

    const slides = [
        `<div class="about-us__slide">
            <img class="about-us__slide-img" src="img/builders-see-building-plan.jpg" alt="three builders see on building plan">
        </div>`,
        `<div class="about-us__slide">
            <img class="about-us__slide-img" src="img/building-products.jpg" alt="making brick's wall">
        </div>`,
        `<div class="about-us__slide">
            <img class="about-us__slide-img" src="img/builders.png" alt="Two builders">
        </div>`,
        `<div class="about-us__slide">
        <img class="about-us__slide-img" src="img/big-machine.jpg" alt="Two big machine">
    </div>`
    ];

    let currentSlideIdx = 0;
    function renderCarousel() {
        const containerSlide = document.querySelector('.about-brand__carousel-slides-content');
        containerSlide.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 1050) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            containerSlide.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 1300) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                containerSlide.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 >= 0 ? currentSlideIdx - 1 : slides.length - 1;
        renderCarousel();
    }

    const prevButton = document.querySelector('.about-brand-btn-carousel-prev');
    prevButton.addEventListener('click', prevSlide);

    const nextButton = document.querySelector('.about-brand-btn-carousel-next');
    nextButton.addEventListener('click', nextSlide);

    renderCarousel();
    window.addEventListener('resize', renderCarousel);
})();