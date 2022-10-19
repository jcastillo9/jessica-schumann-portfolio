const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".nav-menu")

toggleButton.addEventListener('click', navMenu)

function navMenu() {
    event.preventDefault();
    navbarLinks.classList.toggle('active')
  }