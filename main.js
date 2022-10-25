const menuIcon = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = Array.from(document.querySelectorAll('#menu-links'));

function toggleMenu() {
  mobileMenu.classList.toggle('open');
}

function openMenu() {
  toggleMenu();
}

function closeMenu() {
  toggleMenu();
}

navLinks.forEach((elem) => {
  elem.addEventListener('click', closeMenu);
});
menuIcon.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);