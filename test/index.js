/**
 * Imports
 */

var applyStyles = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var div = document.createElement('div')

  applyStyles(div, {width: '20px'})
  t.equal(div.getAttribute('style'), 'width: 20px;')

  applyStyles(div, {height: '20px'}, {width: '20px'})
  t.equal(div.getAttribute('style'), 'height: 20px;')

  t.end()
})

test('should work if empty style object is passed', function (t) {
  var div = document.createElement('div')
  div.style.width = '20px'

  applyStyles(div, null, {width: '20px'})
  t.equal(div.style.width, '')

  t.end()
})
