import speakerComponents from './src/assets/Js files/speakerComponents.js';
import speakersData from './src/assets/Js files/speakersData.js';

const menuIcon = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = Array.from(document.querySelectorAll('#menu-links'));
const speakersSection = document.querySelector('.speakers-cont');
const moreBtn = document.querySelector('.speakers-btn');

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

let speakersHTML = '';

speakersData.forEach((data) => {
  speakersHTML += speakerComponents(data);
});

speakersSection.innerHTML = speakersHTML;

function seeMore() {
  speakersSection.classList.add('height');
  moreBtn.classList.add('display-none');
}

moreBtn.addEventListener('click', seeMore);