const assertEqualTables = require('.')

const actual = [
  {
    name: 'Alex',
    eyes: 'brown',
    hair: 'black'
  },
  {
    name: 'Charles',
    hair: 'blonde',
    eyes: 'brown'
  },
  {
    name: 'Peter',
    hair: 'white',
    eyes: 'blue'
  }
]

const expected = [
  {
    name: 'Alex',
    eyes: 'blue',
    hair: 'black'
  },
  {
    name: 'Charles',
    hair: 'ginger',
    eyes: 'brown'
  },
  {
    name: 'Frans',
    hair: 'ginger',
    eyes: 'brown'
  },
  {
    name: 'Peter',
    hair: 'white',
    eyes: 'blue'
  }
]

assertEqualTables(actual, expected)
