const hamburgerBtn = document.getElementById('hamb')
const dropMenu = document.getElementById('dropMenu')
const wrapper = document.getElementById('wrapper')
const closeBtn = document.getElementById('closeBtn')

hamburgerBtn.addEventListener('click', () => {
    if (dropMenu.className === 'dropMenuOn') {
        dropMenu.className = 'dropMenuOff'
        wrapper.className = 'wrapperOn'
    } else {
        dropMenu.className = 'dropMenuOn'
        wrapper.className = 'wrapperOff'
    }
})

closeBtn.addEventListener('click', () => {
    dropMenu.className = 'dropMenuOff'
    wrapper.className = 'wrapperOn'
})

window.addEventListener('resize', () => {
    console.log(window.innerWidth, 'window.innerWidth')

})


