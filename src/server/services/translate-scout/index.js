const definitions = require('./definitions.json')
const _ = require('lodash')
const util = require('./util')
/**
 * Translates scout report snippets into attribute data
 */
const getAttributes = description => {
  const attributes = {}
  const lowerDescription = description.toLowerCase().replace(/\n/g, ' ')

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

const getCareerRole = description =>
  util.getTextBeforeNextLineBreak(description, 'Projected career role\n')

const getProjection = description =>
  util.getTextBeforeNextLineBreak(description, 'Player Projection\n')

const getInjuryConcerns = description =>
  util.getTextBeforeNextLineBreak(description, 'Injury Concerns\n')

module.exports = {
  getAttributes,
  getCareerRole,
  getProjection,
  getInjuryConcerns
}
