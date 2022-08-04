(function () {

    const posts = [
        `<div id="carousel1" class="carousel__item">
        <div class="post_carousel">
          <img src="img/quots.png" alt="quotes" class="carousel_img" />
          <h2>Jessica Peterson</h2>
          <p>
            “We have been cooperating with this company for a long time and
            order the construction of various commercial facilities quite
            often. This is a reliable contractor and a team of real
            professionals. For 10 years of cooperation, we have never
            encountered a violation of agreements."
          </p>
          <p class="time">December 15, 2020</p>
        </div>
      </div>`,
        `<div id="carousel2" class="carousel__item">
        <div class="post_carousel">
          <img src="img/quots.png" alt="quotes" class="carousel_img" />
          <h2>Daniel Williams</h2>
          <p>
            “Thanks to Great House, we have moved to our new home six months
            ago. We hesitated for a long time when choosing a contractor, as
            we wanted a non-standard design project. Great House specialists
            have won our trust and have come up with improvements that are
            really useful and convenient."
          </p>
          <p class="time">March 03, 2021</p>
        </div>
      </div>`,
        `          <div id="carousel3" class="carousel__item">
        <div class="post_carousel">
          <img src="img/quots.png" alt="quotes" class="carousel_img" />
          <h2>Douglas Hamilton</h2>
          <p>
            “This is not the first time we have worked with Great House and
            every time, we are completely satisfied with the result.
            Everything is really great, from the development of a design
            project to the timing. They pay much attention to the eco
            materials and small details. And each project s perfect.”
          </p>
          <p class="time">September 22, 2021</p>
        </div>`
    ];

    let currentCarouselIdx = 0;

    function renderCarousel() {
        const carouselContainer = document.querySelector('#carousel');
        carouselContainer.innerHTML = posts[currentCarouselIdx];
        if (window.innerWidth > 600) {
            const secondCarouselIdx = currentCarouselIdx + 1 >= posts.length ? 0 : currentCarouselIdx + 1;
            carouselContainer.innerHTML += posts[secondCarouselIdx];
            if (window.innerWidth > 900) {
                const thirdCarouselIdx = secondCarouselIdx + 1 >= posts.length ? 0 : secondCarouselIdx + 1;
                carouselContainer.innerHTML += posts[thirdCarouselIdx];
            }
        }
    }

    function left() {
        currentCarouselIdx = currentCarouselIdx - 1 < 0 ? posts.length - 1 : currentCarouselIdx - 1;
        renderCarousel();
    }

    function right() {
        currentCarouselIdx = currentCarouselIdx + 1 >= posts.length ? 0 : currentCarouselIdx + 1;
        renderCarousel();
    }


    const leftBtn = document.querySelector('.carousel__bth_left');
    leftBtn.addEventListener('click', left);

    const rightBtn = document.querySelector('.carousel__bth_right');
    rightBtn.addEventListener('click', right);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();
