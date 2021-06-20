export default class DropdownMenu {
  /**
   * Create DropdownMenu
   * @param {string} wrapper Wrapper selector
   * @param {string} menuItem Menu Item selector
   * @param {string} controlNext Control to Next item selector
   */
  constructor(wrapper, menuItem, controlNext) {
    this._wrapper = document.querySelector(wrapper)

    if (this._wrapper) {
      this._itemList = this._wrapper.querySelectorAll(menuItem)
      this._controlNext = this._wrapper.querySelector(controlNext)
      this._itemIndex = 0
    }
  }

  _hideItems() {
    this._itemList.forEach((item, index, arr) => {
      if (index !== arr.length - 1) {
        item.style.display = 'none'
      }
    })
  }

  _showItem(item) {
    item.style.display = 'flex'
    item.classList.add('animate__animated', 'animate__fadeIn', 'animate__fast')
  }

  _setOnClickShowItem() {
    this._controlNext.addEventListener('click', (evt) => {
      evt.preventDefault()

      if (this._itemIndex < this._itemList.length - 2) {
        this._showItem(this._itemList[this._itemIndex])
      } else {
        this._showItem(this._itemList[this._itemIndex])
        this._itemList[this._itemList.length - 1].style.display = 'none'
      }
      this._itemIndex++
    })
  }

  init() {
    if (this._wrapper) {
      this._hideItems()
      this._setOnClickShowItem()
    }
  }
}
