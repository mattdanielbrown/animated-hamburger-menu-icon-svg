'use strict'

/* eslint no-undef: "error" */

const menuIconSvg = document.querySelector('#animated-menu-icon-svg')
const menuIcon = document.querySelector('#menu-icon')
const toggleMenuIconSvgStateButton = document.querySelector('#toggleMenuIconSvgStateButton')
const menuButton = document.querySelector('#menu-button')

function toggleClassForElement (targetClass, targetElement) {
  if (targetElement.classList.contains(targetClass)) {
    targetElement.classList.remove(targetClass)
  } else {
    targetElement.classList.add(targetClass)
  }
}

function toggleMenuIconSvgState () {
  // If (menuIconSvg.classList.contains('active')) menuIconSvg.classList.remove('active'); else menuIconSvg.classList.add('active');
  toggleClassForElement('active', menuIconSvg)
}

function toggleMenuIconState () {
  toggleClassForElement('active', menuIcon)
}

menuIconSvg.addEventListener('click', toggleMenuIconSvgState)
toggleMenuIconSvgStateButton.addEventListener('click', toggleMenuIconSvgState)
menuButton.addEventListener('click', toggleMenuIconState)
