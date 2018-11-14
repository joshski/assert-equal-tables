const assert = require('assert')
const assertEqualTables = require('..')

describe('assertEqualTables', function() {
  context('when the tables contain the same data', function() {
    it('does nothing', function() {
      assertEqualTables([{ x: 1 }, { y: 1 }], [{ x: 1 }, { y: 1 }])
    })
  })

  context('when the tables contain different data', function() {
    it('highlights the differences', function() {
      try {
        assertEqualTables([{ x: 1 }, { y: 1 }], [{ x: 3 }, { y: 2, z: 0 }, { x: 4 }])
        throw new Error('no error was thrown!')
      } catch (e) {
        assert.equal(
          e.message,
          'Expected tables with the same data, but found differences:\n\u001b[0;1m@@\u001b[0m \u001b[33m,\u001b[0m\u001b[0;1mx\u001b[0m\u001b[33m,\u001b[0m\u001b[0;1my\u001b[0m  \u001b[33m,\u001b[0m\u001b[0;1mz\u001b[0m\r\n\u001b[32;1m+++\u001b[0m\u001b[33m,\u001b[0m\u001b[32;1m3\u001b[0m\u001b[33m,\u001b[0m\u001b[32;1m\u001b[0m   \u001b[33m,\u001b[0m\u001b[32;1m\u001b[0m\r\n\u001b[31;1m---\u001b[0m\u001b[33m,\u001b[0m\u001b[31;1m1\u001b[0m\u001b[33m,\u001b[0m\u001b[31;1m\u001b[0m   \u001b[33m,\u001b[0m\u001b[31;1m\u001b[0m\r\n\u001b[31;1m\u001b[34;1m→\u001b[32;1m\u001b[0m  \u001b[33m,\u001b[0m \u001b[33m,\u001b[0m\u001b[31;1m1\u001b[34;1m→\u001b[32;1m2\u001b[0m\u001b[33m,\u001b[0m\r\n\u001b[32;1m+++\u001b[0m\u001b[33m,\u001b[0m\u001b[32;1m4\u001b[0m\u001b[33m,\u001b[0m\u001b[32;1m\u001b[0m   \u001b[33m,\u001b[0m\u001b[32;1m\u001b[0m\r\n'
        )
      }
    })
  })
})
