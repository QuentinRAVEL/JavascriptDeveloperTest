const data = [
  {
    name: 'First Land',
    people: [
      {
        name: 'First Person',
        animals: [{ name: 'First animal' }]
      },
      {
        name: 'Second Person',
        animals: [{ name: 'First animal' }, { name: 'Second animal' }]
      }
    ]
  },
  {
    name: 'Second Land',
    people: [
      {
        name: 'Third Person',
        animals: [
          { name: 'First animal' },
          { name: 'Second animal' },
          { name: 'Third animal' }
        ]
      }
    ]
  }
]

module.exports = {
  data
}
