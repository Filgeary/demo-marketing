export default class MiniDropdown {
  /**
   * Create MiniDropdown
   * @param {string} wrapper Wrapper selector
   * @param {string} control Control to show item selector
   */
  constructor(wrapper, control) {
    this._wrapper = document.querySelector(wrapper)

    if (this._wrapper) {
      this._controlsList = this._wrapper.querySelectorAll(control)
    }
  }

  _showItem() {
    this._controlsList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        const sibling = item.closest('.module__info-show').nextElementSibling
        sibling.classList.toggle('js-display-block-important')
      })
    })
  }

  init() {
    if (this._wrapper && this._controlsList.length > 0) {
      this._showItem()
    }
  }
}
