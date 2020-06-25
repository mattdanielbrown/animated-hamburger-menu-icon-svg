'use strict'

/* eslint no-undef: "error" */
module.exports = function () {
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
    toggleClassForElement('active', menuIconSvg)
  }

  function toggleMenuIconState () {
    toggleClassForElement('active', menuIcon)
  }

  menuIconSvg.addEventListener('click', toggleMenuIconSvgState)
  toggleMenuIconSvgStateButton.addEventListener('click', toggleMenuIconSvgState)
  menuButton.addEventListener('click', toggleMenuIconState)

  return menuButton
}
