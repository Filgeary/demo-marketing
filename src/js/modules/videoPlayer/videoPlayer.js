export default class VideoPlayer {
  /**
   * Create VideoPlayer
   * @param {string} wrapper Wrapper selector
   * @param {string} playerCont Player container selector
   * @param {string} buttonClose Button Close selector
   * @param {string} control Control selector
   */
  constructor(wrapper, playerCont, buttonClose, control) {
    this._wrapper = document.querySelector(wrapper)

    if (this._wrapper) {
      this._playerCont = this._wrapper.querySelector(playerCont)
      this._buttonClose = this._wrapper.querySelector(buttonClose)
      this._controlList = document.querySelectorAll(control)

      this._setOnClickModalClose = this._setOnClickModalClose.bind(this)
    }
  }

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  _createPlayer(url) {
    // eslint-disable-next-line
    this._player = new YT.Player(this._playerCont, {
      width: '100%',
      height: '100%',
      videoId: `${url}`,
    })

    this._wrapper.style.display = 'flex'
  }

  _setOnClickPlayVideo() {
    this._controlList.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault()

        if (
          document.querySelector(
            `iframe#${this._playerCont.getAttribute('id')}`,
          )
        ) {
          this._wrapper.style.display = 'flex'
        } else {
          this._urlPath = item.getAttribute('data-url')
          this._createPlayer(this._urlPath)
        }
      })
    })
  }

  _setOnClickModalClose() {
    this._buttonClose.addEventListener('click', (evt) => {
      evt.preventDefault()

      this._wrapper.style.display = 'none'
      this._player.stopVideo()
    })

    this._wrapper.addEventListener('click', (evt) => {
      evt.preventDefault()

      this._wrapper.style.display = 'none'
      this._player.stopVideo()
    })
  }

  _setOnKeydownModalClose() {
    document.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape' && this._wrapper.style.display === 'flex') {
        this._wrapper.click()
        this._player.stopVideo()
      }
    })
  }

  init() {
    if (this._wrapper && this._controlList.length > 0) {
      // This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      this._setOnClickPlayVideo()
      this._setOnClickModalClose()
      this._setOnKeydownModalClose()
    }
  }
}
