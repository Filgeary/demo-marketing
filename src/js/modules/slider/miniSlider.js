import AbstractSlider from './abstractSlider'

export default class MiniSlider extends AbstractSlider {
  /**
   * Create Mini Slider
   *
   * @param {Object} obj Object with params for constructor
   * @param {string} obj.wrapper Wrapper selector
   * @param {string} obj.controlNext Control Next slide selector
   * @param {string} obj.controlPrev Control Prev slide selector
   * @param {string} obj.activeClass Active class selector
   * @param {boolean} obj.isAutoplay Autoplay slider
   */
  constructor({
    wrapper,
    controlNext,
    controlPrev,
    activeClass = '',
    isAutoplay = false,
  }) {
    super({ wrapper, controlNext })

    if (this._sliderItems) {
      this._sliderItems = this._sliderItems.filter((item) => {
        return item.tagName !== 'BUTTON'
      })
      this._controlPrevList = document.querySelectorAll(controlPrev)
      this._activeClass = activeClass ? activeClass.replace(/^\./, '') : ''
      this._isAutoplay = isAutoplay
    }
  }

  _showSlide(next) {
    this._sliderItems.forEach((item) => {
      item.classList.remove(
        'animate__animated',
        'animate__fadeIn',
        'animate__fast',
      )
    })

    if (this._activeClass) {
      this._sliderItems.forEach((item) => {
        item.classList.remove(this._activeClass)
      })
    }

    if (next) {
      this._sliderWrapper.appendChild(this._sliderItems[this._slideIndex])

      if (this._slideIndex >= this._sliderItems.length - 1) {
        this._slideIndex = 0
      } else {
        this._slideIndex++
      }
    } else {
      if (this._slideIndex < 1) {
        this._slideIndex = this._sliderItems.length - 1
        this._sliderWrapper.insertBefore(
          this._sliderItems[this._slideIndex],
          this._sliderItems[0],
        )
      } else {
        this._slideIndex--
        this._sliderWrapper.insertBefore(
          this._sliderItems[this._slideIndex],
          this._sliderItems[this._slideIndex + 1],
        )
      }
    }

    this._sliderItems[this._slideIndex].classList.add(
      'animate__animated',
      'animate__fadeIn',
      'animate__fast',
    )

    if (this._activeClass) {
      this._sliderItems[this._slideIndex].classList.add(this._activeClass)
    }
  }

  _setOnClickShowSlide() {
    this._controlNextList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._showSlide(true)
      })
    })
    this._controlPrevList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._showSlide()
      })
    })
  }

  init() {
    if (this._sliderItems) {
      this._sliderWrapper.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `
      this._setOnClickShowSlide()

      if (this._isAutoplay) {
        setInterval(() => {
          this._showSlide(true)
        }, 5000)
      }
    }
  }
}
