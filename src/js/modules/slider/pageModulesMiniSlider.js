import AbstractSlider from './abstractSlider'

export default class PageModulesMiniSlider extends AbstractSlider {
  /**
   * Create PageModulesMiniSlider
   * @param {Object} obj Object with params for constructor
   * @param {string} obj.wrapper Wrapper selector
   * @param {string} obj.controlNext Control Next selector
   * @param {string} obj.controlPrev Control Prev selector
   */
  constructor({ wrapper, controlNext, controlPrev }) {
    super({ wrapper, controlNext, controlPrev })

    this._controlPrevList = document.querySelectorAll(controlPrev)
  }

  _removeSlides() {
    this._sliderItems.forEach((item) => {
      item.style.display = 'none'
      item.classList.remove(
        'animate__animated',
        'animate__fadeIn',
        'animate__fast',
      )
    })
  }

  _showSlide() {
    super._showSlide()

    this._sliderItems[this._slideIndex].classList.add(
      'animate__animated',
      'animate__fadeIn',
      'animate__fast',
    )
  }

  init() {
    if (this._controlPrevList) {
      super.init()

      this._controlPrevList.forEach((item) => {
        item.addEventListener('click', (evt) => {
          evt.preventDefault()

          this._slideIndex--
          this._showSlide()
        })
      })
    }
  }
}
