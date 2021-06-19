/**
 * Check Tel inputs via mask
 * @param {string} selector Input type Tel selector
 */

export const checkInputTel = (selector) => {
  function setCursorPosition(pos, elem) {
    setTimeout(() => {
      elem.selectionStart = elem.selectionEnd = pos
    })
  }

  function createTelMask(evt) {
    const currentTarget = evt.currentTarget
    const matrix = '+1 (___) ___-____'
    let i = 0
    const def = matrix.replace(/\D/g, '')
    let val = currentTarget.value.replace(/\D/g, '')

    if (def.length >= val.length) {
      val = def
    }

    // prettier-ignore
    currentTarget.value = matrix.replace(/./g, function (str) {
      return /[_\d]/.test(str) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
          ? ''
          : str
    })

    if (evt.type === 'blur') {
      if (currentTarget.value.length === 2) {
        currentTarget.value = ''
      }
    } else {
      setCursorPosition(currentTarget.value.length, currentTarget)
    }
  }
  const inputElements = document.querySelectorAll(selector)

  inputElements.forEach((item) => {
    item.addEventListener('input', createTelMask)
    item.addEventListener('focus', createTelMask)
    item.addEventListener('blur', createTelMask)
  })
}
