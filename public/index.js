const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close-menu')
const promote = document.getElementById('promote')
const promoteClose = document.getElementById('promote-close')

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
  } else {
    menu.classList.add('hidden')
  }
})

closeMenu.addEventListener('click', () => {
  menu.classList.add('hidden')
})

promoteClose.addEventListener('click', () => {
  promote.classList.add('close')
})
