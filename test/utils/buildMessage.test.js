const assert = require('assert')
const { buildMessage } = require('../../utils/buildMessage')

describe.only('utils - build message', function() {
  describe('when receives an entity and an action', function() {
    it('should return the respective message', function() {
      const result = buildMessage('movie', 'create')
      const expect = 'movie created'
      assert.strictEqual(result,expect)
    })
  })
  describe('when receibes an entity and an action and is a list', function(){
    const result = buildMessage('movie', 'list')
    const expect = 'movies listed'
    assert.strictEqual(result, expect)
  })
})