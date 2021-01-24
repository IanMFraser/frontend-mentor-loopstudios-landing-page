const hamburger = document.querySelector('.hamburger-button')
const menu = document.querySelector('.nav-menu')
const icon = document.querySelector('.burger-icon')
const body = document.body

hamburger.addEventListener('click', () => {
   if(menu.style.display === 'none'){
    menu.style.display = 'block'
    icon.src = '/images/icon-close.svg'
    body.style.overflowY = 'hidden'
   } else {
    menu.style.display = 'none'
    icon.src = '/images/icon-hamburger.svg'
    body.style.overflowY = 'auto'
   }
})
