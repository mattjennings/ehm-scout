/**
 * Gets the text before the next linebreak (\n) in the string
 */
const getTextBeforeNextLineBreak = (string, startingString) => {
  const index = string.indexOf(startingString)

  if (index > -1) {
    return string.substring(
      index + startingString.length,
      string.indexOf('\n', index + startingString.length) // next \n after substring
    )
  }

  return null
}

module.exports = {
  getTextBeforeNextLineBreak
}
