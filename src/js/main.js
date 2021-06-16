'use strict'

// modules
import MainSlider from './modules/slider/mainSlider'
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider(
    '.page',
    '.next',
    '.js-controlToHome',
    '.hanson',
  )
  mainSlider.init()

  const videoPlayer = new VideoPlayer('.overlay', '#frame', '.close', '.play')
  videoPlayer.init()
})
