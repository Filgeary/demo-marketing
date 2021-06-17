'use strict'

// modules
import MainSlider from './modules/slider/mainSlider'
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({
    wrapper: '.page',
    controlNext: '.next',
    controlToHome: '.js-controlToHome',
    modal: '.hanson',
  })
  mainSlider.init()

  const videoPlayer = new VideoPlayer('.overlay', '#frame', '.close', '.play')
  videoPlayer.init()
})
