// JS Goes here - ES6 supported

import "./css/main.scss";

// Say hello
// eslint-disable-next-line no-console
console.log("🦊 Moshi Moshi!");

let menuIsOpen = false
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')

const closeMenu = () => {
  menu.className = menu.className.replace('left-50', 'left-100')
  menuBtn.innerHTML = 'Menu'
  menuIsOpen = false
}

const openMenu = () => {
  menu.className = menu.className.replace('left-100', 'left-50')
  menuBtn.innerHTML = 'Close'
  menuIsOpen = true
}

window.onload = () => {
  // bind click handler to menu button
  menuBtn.onclick = (e) => {
    e.preventDefault()    
    if (menuIsOpen) closeMenu()
    else openMenu()
  }
}

window.onresize = closeMenu