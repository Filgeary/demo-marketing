import { postDataText } from '../api'

export default class Form {
  /**
   * Create Form
   * @param {string} form Form selector
   * @param {string} endPoint EndPoint URL
   * @param {string} modal Modal selector that need to show
   * @param {string} modalContent Content selector that need to add Message
   */
  constructor(form, endPoint, modal, modalContent) {
    try {
      this._formsList = document.querySelectorAll(form)
      this._endPoint = endPoint
      this._modal = document.querySelector(modal)
      this._modalContent = this._modal.querySelector(modalContent)
    } catch (err) {
      console.warn("Can't implement Form on this page")
    }

    this._message = {
      loading: 'Pending order...',
      success: 'Thank You for your order!',
      error: 'Oops! Something wrong...',
    }
  }

  _setOnSubmitPostData() {
    this._formsList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault()

        this._modalContent.textContent = this._message.loading
        this._modal.style.display = 'block'

        const dataForm = new FormData(formElement)

        postDataText(this._endPoint, dataForm)
          .then((dataText) => {
            console.log(dataText)
            this._modalContent.textContent = this._message.success
          })
          .catch((err) => {
            console.error(err)
            this._modalContent.textContent = this._message.error
          })
          .finally(() => {
            formElement.reset()
            setTimeout(() => {
              this._modal.style.display = 'none'
            }, 3000)
          })
      })
    })
  }

  init() {
    this._setOnSubmitPostData()
  }
}
