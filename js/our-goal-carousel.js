(function () {
  const slidesBox = [
    `<div class ="our-goals-slides">
    <img src="img/gallery1.png" alt="Engineers discussion">
    </div>`,
    `<div class ="our-goals-slides">
    <img src="img/gallery2.png" alt="Building outside">
    </div>`,
    `<div class ="our-goals-slides">
    <img src="img/gallery3.png" alt="Building discussion">
    </div>`,
    `<div class ="our-goals-slides">
    <img src="img/gallery4.png" alt="Building hall"">
    </div>`,
    `<div class ="our-goals-slides">
    <img src="img/gallery5.png" alt="Presentation">
    </div>`,
    `<div class ="our-goals-slides">
    <img src="img/gallery6.png" alt="Construction related">
    </div>`,
  ];
  const ourImageBox = document.querySelectorAll(".our-image img");
  const ourGoalContainer = document.querySelector(".our-goal-photo-container");

  let currentSlideIndex = 0;
  function renderCarousel() {
    const slidesBoxContainer = document.querySelector(".our-goal-photo-wrapper" );
    slidesBoxContainer.innerHTML = slidesBox[currentSlideIndex];
  } 

  function next() {
    currentSlideIndex =
      currentSlideIndex + 1 >= slidesBox.length ? 0 : currentSlideIndex + 1;
    renderCarousel();
  }
  function prev() {
    currentSlideIndex =
      currentSlideIndex - 1 < 0 ? slidesBox.length - 1 : currentSlideIndex - 1;
    renderCarousel();
  }
  const ourActiveContainer = () => {ourGoalContainer.classList.add('active');}
  const ourRemovedContainer = () => {ourGoalContainer.classList.remove('active');}

  const nextBtn = document.querySelector(".our-goal-btn.next");
  nextBtn.addEventListener("click", next);
  const prevBtn = document.querySelector(".our-goal-btn.prev");
  prevBtn.addEventListener("click", prev);
  const extBtn = document.querySelector(".our-goal-btn.ext");
  extBtn.addEventListener('click', () => {
    ourRemovedContainer()
  });
  const zoomInBtn = document.querySelector(".zoom-in-gallery");
  const zoomOutBtn = document.querySelector(".zoom-out-gallery");



    ourImageBox.forEach((image, index) => {
    image.addEventListener ('click', (e) => {
        currentSlideIndex = Number(image.dataset.index);
        console.log(currentSlideIndex);
        ourActiveContainer();
        renderCarousel();
    
    })
  })
 
})();
