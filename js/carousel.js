const right = document.getElementById('carousel__bth_right')
const left = document.getElementById('carousel__bth_left')

let counter = 1;
left.addEventListener('click', () => {
    console.log('CLICK');
    if (counter > 1)  {
        counter--
    }
    window.location =`/#carousel${counter}`;
})

right.addEventListener('click', () => {
    console.log('CLICK');
    if (counter < 4)  {
        counter++
    }
    window.location =`/#carousel${counter}`;
})

/*--Code for gallery our goals--*/

lightGallery(document.getElementById('lg-share-demo'), {
    selector: '.item',
    getCaptionFromTitleOrAlt: false,
    appendCounterTo:false,
    download:false,
    actualSize:true,
    plugins: [lgZoom]

});
