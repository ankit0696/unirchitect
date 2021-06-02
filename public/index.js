const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close-menu')

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
