'use strict'

// modules
import Slider from './modules/slider'
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next', '.js-controlToHome', '.hanson')
  slider.init()

  const videoPlayer = new VideoPlayer('.overlay', '#frame', '.close', '.play')
  videoPlayer.init()
})
