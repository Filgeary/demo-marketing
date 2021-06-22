import VideoPlayer from './videoPlayer'

export default class DoubleVideoPlayer extends VideoPlayer {
  /**
   * Create DoubleVideoPlayer
   * @param {string} wrapper Wrapper selector
   * @param {string} playerCont Player container selector
   * @param {string} buttonClose Button Close selector
   * @param {string} control Control selector
   * @param {string} playerItemsWrapper Player Items Wrapper selector
   * @param {string} playerItemElement Player Item Element selector
   */
  constructor(
    wrapper,
    playerCont,
    buttonClose,
    control,
    playerItemsWrapper,
    playerItemElement,
  ) {
    super(wrapper, playerCont, buttonClose, control)

    this._playerItemsWrapper = document.querySelector(playerItemsWrapper)

    if (this._playerItemsWrapper) {
      this._playerItemElement = playerItemElement
      this._onPlayerStateChange = this._onPlayerStateChange.bind(this)
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
      events: {
        onStateChange: this._onPlayerStateChange,
      },
    })

    this._wrapper.style.display = 'flex'
  }

  _setOnClickPlayVideo() {
    this._controlList.forEach((control, index) => {
      const blockedPlayerItemElement = control.closest(
        this._playerItemElement,
      ).nextElementSibling

      if (index % 2 === 0) {
        blockedPlayerItemElement.setAttribute('data-disabled', 'true')
      }

      control.addEventListener('click', (evt) => {
        evt.preventDefault()

        if (
          !control.closest(this._playerItemElement) ||
          control
            .closest(this._playerItemElement)
            .getAttribute('data-disabled') !== 'true'
        ) {
          this._activeControl = control

          if (
            document.querySelector(
              `iframe#${this._playerCont.getAttribute('id')}`,
            )
          ) {
            this._wrapper.style.display = 'flex'

            if (this._urlPath !== control.getAttribute('data-url')) {
              this._urlPath = control.getAttribute('data-url')
              this._player.loadVideoById({ videoId: `${this._urlPath}` })
            }
          } else {
            this._urlPath = control.getAttribute('data-url')
            this._createPlayer(this._urlPath)
          }
        }
      })
    })
  }

  _onPlayerStateChange(state) {
    const blockedElem = this._activeControl.closest(
      this._playerItemElement,
    ).nextElementSibling
    const playControl = this._activeControl.querySelector('svg').cloneNode(true)

    if (state.data === 0) {
      if (
        blockedElem.querySelector('.play__circle').classList.contains('closed')
      ) {
        blockedElem.querySelector('.play__circle').classList.remove('closed')
        blockedElem.querySelector('svg').remove()
        blockedElem.querySelector('.play__circle').appendChild(playControl)
        blockedElem.querySelector('.play__text').textContent = 'play video'
        blockedElem.querySelector('.play__text').classList.remove('attention')
        blockedElem.style.opacity = 1
        blockedElem.style.filter = 'none'

        blockedElem.setAttribute('data-disabled', 'false')
      }
    }
  }

  init() {
    if (this._playerItemsWrapper) {
      super.init()
    }
  }
}
