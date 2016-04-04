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
var emptyObj = {}

/**
 * applyStyles
 */

function applyStyles (node, styles, prevStyles) {
  var nodeStyle = node.style

  styles = styles || emptyObj

  if (prevStyles) {
    for (var key in prevStyles) {
      if (has(key, prevStyles) && !has(key, styles)) {
        if (key === 'float') key = floatProp
        nodeStyle[key] = ''
      }
    }
  }

  for (var key in styles) {
    if (has(key, styles)) {
      var val = defaultUnits(key, styles[key])
      if (key === 'float') key = floatProp
      nodeStyle[key] = (val === null || val === undefined) ? '' : val
    }
  }
}
