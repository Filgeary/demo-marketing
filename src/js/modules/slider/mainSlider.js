import AbstractSlider from './abstractSlider'

export default class MainSlider extends AbstractSlider {
  /**
   * Create Main Slider
   *
   * @param {Object} obj Object with params for constructor
   * @param {string} obj.wrapper Wrapper selector
   * @param {string} obj.controlNext Control selector
   * @param {string} obj.controlToHome Control to Home selector
   * @param {string} obj.modal Modal selector that need to show by slide number
   */
  constructor({ wrapper, controlNext, controlToHome, modal }) {
    super({ wrapper, controlNext })

    this._controlToHomeList = document.querySelectorAll(controlToHome)
    this._modal = document.querySelector(modal)
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

    if (this._modal) {
      this._showModalBySlide()
    }
  }

  _showModalBySlide() {
    if (this._slideIndex === 2) {
      setTimeout(() => {
        this._modal.style.display = 'block'
        this._modal.classList.add(
          'animate__animated',
          'animate__fadeInUp',
          'animate__fast',
        )
      }, 3000)
    } else {
      this._modal.style.display = 'none'
      this._modal.classList.remove(
        'animate__animated',
        'animate__fadeInUp',
        'animate__fast',
      )
    }
  }

  init() {
    super.init()

    this._controlToHomeList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._slideIndex = 0
        this._showSlide()
      })
    })
  }
}
