// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
// Menu
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