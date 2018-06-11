const definitions = require('./definitions.json')
const _ = require('lodash')

const getAttributes = description => {
  const attributes = {}
  const lowerDescription = description.toLowerCase()

  _.forEach(definitions.scoutReport, (attribute, attributeKey) => {
    _.forEach(attribute, definition => {
      if (lowerDescription.indexOf(definition.snippet.toLowerCase()) > -1) {
        if (
          !attributes[attributeKey] ||
          attributes[attributeKey].min > definition.range.min ||
          attributes[attributeKey].max > definition.range.max
        ) {
          attributes[attributeKey] = definition.range
        }
      }
    })
  })

  return attributes
}

module.exports = {
  getAttributes
}
