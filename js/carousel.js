const rigth = document.getElementById('carousel__bth_right')
const left = document.getElementById('carousel__bth_left')

let counter = 1;

window.addEventListener('resize', () => {
    console.log('resize')
    counter = 1
    window.location =`/#carousel${counter}`;
})



left.addEventListener('click', () => {
    console.log('CLICK');
    if (counter > 1)  {
        counter--
    }
    window.location =`/#carousel${counter}`;
})

rigth.addEventListener('click', () => {
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
