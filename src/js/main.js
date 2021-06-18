'use strict'

// modules
import MainSlider from './modules/slider/mainSlider'
import MiniSlider from './modules/slider/miniSlider'
import VideoPlayer from './modules/videoPlayer'
import DropdownMenu from './modules/dropdownMenu'

window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new MainSlider({
    wrapper: '.page',
    controlNext: '.next',
    controlToHome: '.js-controlToHome',
    modal: '.hanson',
  })
  mainSlider.init()

  const showupSlider = new MiniSlider({
    wrapper: '.showup__content-slider',
    controlNext: '.showup__next',
    controlPrev: '.showup__prev',
    activeClass: '.card-active',
  })
  showupSlider.init()

  const modulesSlider = new MiniSlider({
    wrapper: '.modules__content-slider',
    controlNext: '.modules__info-btns .slick-next',
    controlPrev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    isAutoplay: true,
  })
  modulesSlider.init()

  const feedSlider = new MiniSlider({
    wrapper: '.feed__slider',
    controlNext: '.feed__slider .slick-next',
    controlPrev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
  })
  feedSlider.init()

  const videoPlayer = new VideoPlayer('.overlay', '#frame', '.close', '.play')
  videoPlayer.init()

  const officeroldDropdownMenu = new DropdownMenu(
    '.officerold',
    '.officer__card-item',
    '.plus',
  )
  officeroldDropdownMenu.init()

  const officernewDropdownMenu = new DropdownMenu(
    '.officernew',
    '.officer__card-item',
    '.plus',
  )
  officernewDropdownMenu.init()
})
