const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".nav-menu")

toggleButton.addEventListener('click', navMenu)

function navMenu() {
    navbarLinks.classList.toggle('active')
  }