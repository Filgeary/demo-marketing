'use strict'

// modules
import Slider from './modules/slider'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next', '.js-controlToHome')
  slider.init()
})
