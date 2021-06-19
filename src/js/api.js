/**
 * Post data via text
 * @param {string} url Url for posting data
 * @param {Object} data Object from FormData
 * @returns Text response
 */
export const postDataText = async (url, data) => {
  const result = await fetch(url, {
    method: 'POST',
    body: data,
  })

  return await result.text()
}
