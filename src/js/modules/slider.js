export default class Slider {
  /**
   * Create Slider
   * @param {string} wrapper Wrapper selector
   * @param {string} control Control selector
   * @param {string} controlToHome Control to Home selector
   * @param {string} modal Modal selector
   */
  constructor(wrapper, control, controlToHome, modal) {
    this._sliderWrapper = document.querySelector(wrapper)
    this._sliderItems = [...this._sliderWrapper.children]
    this._controlList = document.querySelectorAll(control)
    this._controlToHomeList = document.querySelectorAll(controlToHome)
    this._modal = document.querySelector(modal)
    this._slideIndex = 0
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

  _showSlide(index = 0) {
    this._removeSlides()

    if (this._slideIndex >= this._sliderItems.length - 1) {
      this._slideIndex = 0
    } else if (this._slideIndex < 0) {
      this._slideIndex = this._sliderItems.length
    } else {
      this._slideIndex += index
    }

    this._sliderItems[this._slideIndex].style.display = 'block'
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
    this._controlList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._showSlide(1)
      })
    })

    this._controlToHomeList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._slideIndex = 0
        this._showSlide(0)
      })
    })
  }
}
