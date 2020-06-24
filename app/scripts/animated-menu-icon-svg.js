'use strict';

const menuIconSvg = document.getElementById('animated-menu-icon-svg');
const menuIcon = document.getElementById('menu-icon');
const toggleMenuIconSvgStateButton = document.getElementById('toggleMenuIconSvgStateButton');
const menuButton = document.getElementById('menu-button');

function toggleClassForElement(targetClass, targetElement) {
  if (targetElement.classList.contains(targetClass)) {
    targetElement.classList.remove(targetClass);
  } else {
    targetElement.classList.add(targetClass);
  }
}
function toggleMenuIconSvgState() {
  // if (menuIconSvg.classList.contains('active')) menuIconSvg.classList.remove('active'); else menuIconSvg.classList.add('active');
  toggleClassForElement('active', menuIconSvg);
}
function toggleMenuIconState() {
  toggleClassForElement('active', menuIcon);
}

menuIconSvg.addEventListener('click', toggleMenuIconSvgState);
toggleMenuIconSvgStateButton.addEventListener('click', toggleMenuIconSvgState);
menuButton.addEventListener('click', toggleMenuIconState);

