'use strict'

/* eslint no-undef: "error" */

var menuIconSvg,
  menuIcon,
  menuButton

function toggleClassForElement (targetClass, targetElement) {
  if (targetElement.classList.contains(targetClass)) {
    targetElement.classList.remove(targetClass)
  } else {
    targetElement.classList.add(targetClass)
  }
}

function toggleMenuIconSvgState () {
  toggleClassForElement('active', menuIconSvg)
}

function toggleMenuIconState () {
  toggleClassForElement('active', menuIcon)
}

if (document.querySelector('#menu-icon-svg')) {
  menuIconSvg = document.querySelector('#animated-menu-icon-svg')
  menuIconSvg.addEventListener('click', toggleMenuIconSvgState)
}
if (document.querySelector('#menu-icon')) {
  menuIcon = document.querySelector('#menu-icon')
  menuIcon.addEventListener('click', toggleMenuIconSvgState)
}
if (document.querySelector('#menu-button')) {
  menuButton = document.querySelector('#menu-button')
  menuButton.addEventListener('click', toggleMenuIconState)
}
