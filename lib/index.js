/**
 * Modules
 */

var has = require('@f/has')
var defaultUnits = require('@f/css-default-units')

/**
 * Expose applyStyles
 */

module.exports = applyStyles

/**
 * Constants
 */

var floatProp = 'cssFloat'

/**
 * applyStyles
 */

function applyStyles (node, styles, prevStyles) {
  var style = node.style

  if (prevStyles) {
    for (var key in prevStyles) {
      if (has(key, prevStyles) && !has(key, styles)) {
        if (key === 'float') key = floatProp
        style[key] = ''
      }
    }
  }

  for (var key in styles) {
    if (has(key, style)) {
      var val = defaultUnits(key, styles[key])
      if (key === 'float') key = floatProp
      style[key] = val ? val : ''
    }
  }
}
