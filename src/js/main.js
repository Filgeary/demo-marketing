'use strict'

// utils
import { checkInputTel } from './utils/checkInputTel'

// modules
import MainSlider from './modules/slider/mainSlider'
import MiniSlider from './modules/slider/miniSlider'
import PageModulesMiniSlider from './modules/slider/pageModulesMiniSlider'
import VideoPlayer from './modules/videoPlayer/videoPlayer'
import DoubleVideoPlayer from './modules/videoPlayer/doubleVideoPlayer'
import DropdownMenu from './modules/dropdownMenu'
import Form from './modules/form'
import MiniDropdown from './modules/miniDropdown'

window.addEventListener('DOMContentLoaded', () => {
  // endpoints
  const END_POINT = {
    getJSON: 'assets/db.json',
    postJSON: 'https://jsonplaceholder.typicode.com/posts',
    postText: 'https://echo.htmlacademy.ru',
  }

  // utils
  checkInputTel('form [type="tel"]')

  // Page index.html
  // ==========================================================================

  // modules
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

  const videoPlayer = new VideoPlayer(
    '.overlay',
    '#frame',
    '.close',
    '.showup__video .play',
  )
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

  const form = new Form(
    'form',
    END_POINT.postText,
    '.js-modal',
    '.js-modal__content',
  )
  form.init()

  // Page modules.html
  // ==========================================================================

  // modules
  const pageModulesMiniSlider = new PageModulesMiniSlider({
    wrapper: '.moduleapp',
    controlNext: '.nextmodule',
    controlPrev: '.prevmodule',
  })
  pageModulesMiniSlider.init()

  const doubleVideoPlayer = new DoubleVideoPlayer(
    '.overlay',
    '#frame',
    '.close',
    '.module__video-item .play',
    '.module__video',
    '.module__video-item',
  )
  doubleVideoPlayer.init()

  const miniDropdown = new MiniDropdown('.moduleapp', '.plus')
  miniDropdown.init()
})
