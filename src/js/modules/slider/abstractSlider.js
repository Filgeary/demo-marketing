export default class AbstractSlider {
  /**
   * Create Abstract Slider
   * @param {string} wrapper Wrapper selector
   * @param {string} controlNext Control selector
   */
  constructor({ wrapper, controlNext }) {
    if (new.target === AbstractSlider) {
      throw new Error("Can't instantiate Abstract, only concrete one.")
    }

    this._sliderWrapper = document.querySelector(wrapper)
    this._sliderItems = [...this._sliderWrapper.children]
    this._controlNextList = document.querySelectorAll(controlNext)
    this._slideIndex = 0
  }

  _removeSlides() {
    this._sliderItems.forEach((item) => {
      item.style.display = 'none'
    })
  }

  _showSlide() {
    this._removeSlides()

    if (this._slideIndex >= this._sliderItems.length) {
      this._slideIndex = 0
    }
    if (this._slideIndex < 0) {
      this._slideIndex = this._sliderItems.length
    }

    this._sliderItems[this._slideIndex].style.display = 'block'
  }

  init() {
    this._controlNextList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._slideIndex++
        this._showSlide()
      })
    })
  }
}
