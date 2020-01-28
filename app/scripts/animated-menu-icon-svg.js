'use strict';

const menuIconSvg = document.getElementById('animated-menu-icon-svg');
const menuIcon = document.getElementById('menu-icon');
const toggleMenuIconSvgStateButton = document.getElementById('toggleMenuIconSvgStateButton');
const menuButton = document.getElementById('menu-button');


function toggleMenuIconSvgState() {
  if (menuIconSvg.classList.contains('active')) {
    menuIconSvg.classList.remove('active');
  } else {
    menuIconSvg.classList.add('active');
  }
}
function toggleMenuIconState() {
  if (menuIcon.classList.contains('active')) {
    menuIcon.classList.remove('active');
  } else {
    menuIcon.classList.add('active');
  }
}

menuIconSvg.addEventListener('click', toggleMenuIconSvgState);

toggleMenuIconSvgStateButton.addEventListener('click', toggleMenuIconSvgState);
menuButton.addEventListener('click', toggleMenuIconState);
