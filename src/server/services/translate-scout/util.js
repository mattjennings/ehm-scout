const _ = require('lodash')

/**
 * Gets the text before the next linebreak (\n) in the string
 * @param text - text to look through
 * @param startingString - starts the substring at the end of this if found in "text". Can be array.
 */
const getSubstringBeforeLineBreak = (text, startingText) => {
  const strings = Array.isArray(startingText) ? startingText : [startingText]

  let result = null
  _.forEach(strings, string => {
    const index = text.indexOf(string)
    if (index > -1) {
      result = text.substring(
        index + string.length,
        text.indexOf('\n', index + string.length) // next \n after substring
      )
      return false // break loop
    }

    return true
  })

  return result
}

module.exports = {
  getSubstringBeforeLineBreak
}
