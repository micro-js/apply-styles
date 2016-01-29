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
      if (!prevStyles.hasOwnProperty(key) || styles.hasOwnProperty(key) || !prevStyles[key]) {
        continue
      }

      if (key === 'float') {
        key = floatProp
      }

      style[key] = ''
    }
  }

  for (var key in styles) {
    if (!style.hasOwnProperty(key)) {
      continue
    }

    var val = styles[key]
    if (key === 'float') {
      key = floatProp
    }

    if (val) {
      style[key] = val
    } else {
      style[key] = ''
    }
  }
}
