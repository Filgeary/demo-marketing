export default class DownloadFile {
  /**
   * Create DownloadFile class
   * @param {string} control Control selector
   * @param {string} path URL path
   */
  constructor(control, path) {
    this._controlsList = document.querySelectorAll(control)

    if (this._controlsList.length > 0) {
      this._path = path
    }
  }

  _downloadItem() {
    const link = document.createElement('a')

    link.setAttribute('href', this._path)
    link.setAttribute('download', 'test-pdf')

    link.style.display = 'none'
    document.body.appendChild(link)

    link.click()
    document.body.removeChild(link)
  }

  _setOnClickDownloadFile() {
    this._controlsList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        this._downloadItem()
      })
    })
  }

  init() {
    if (this._controlsList.length > 0) {
      this._setOnClickDownloadFile()
    }
  }
}
