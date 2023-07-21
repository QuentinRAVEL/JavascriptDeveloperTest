assert = require('assert')

const {
  reduceByPatternAndKeyProperty,
  countArrayChildren
} = require('../src/services/services.js')

// Données de test de base
const dataTest = [
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

// Données de test filtrées sur le nom d'animal "First"
const dataTestFiltered = [
  {
    name: 'First Land',
    people: [
      {
        name: 'First Person',
        animals: [{ name: 'First animal' }]
      },
      {
        name: 'Second Person',
        animals: [{ name: 'First animal' }]
      }
    ]
  },
  {
    name: 'Second Land',
    people: [
      {
        name: 'Third Person',
        animals: [{ name: 'First animal' }]
      }
    ]
  }
]

// Données de test avec comptabilisation des enfants
const dataTestCount = [
  {
    name: 'First Land [2]',
    people: [
      {
        name: 'First Person [1]',
        animals: [{ name: 'First animal' }]
      },
      {
        name: 'Second Person [2]',
        animals: [{ name: 'First animal' }, { name: 'Second animal' }]
      }
    ]
  },
  {
    name: 'Second Land [1]',
    people: [
      {
        name: 'Third Person [3]',
        animals: [
          { name: 'First animal' },
          { name: 'Second animal' },
          { name: 'Third animal' }
        ]
      }
    ]
  }
]

/*
 * Tests reduceByPatternAndKeyProperty
 */
describe('Premier test de la fonction reduceByPatternAndKeyProperty', function () {
  describe("Test avec passage en premier paramétre d'un objet vide", function () {
    it('Cela doit retouner un tableau vide', function () {
      var result = reduceByPatternAndKeyProperty([], 'animals.name', '')
      assert.equal(0, result.length)
    })
  })
})

describe('Deuxième test de la fonction reduceByPatternAndKeyProperty', function () {
  describe("Test avec passage en second paramétre d'une chaine vide", function () {
    it('Cela doit retouner un tableau vide', function () {
      var result = reduceByPatternAndKeyProperty(dataTest, '', '')
      assert.equal(0, result.length)
    })
  })
})

describe('Troisième test de la fonction reduceByPatternAndKeyProperty', function () {
  describe("Test avec passage en troisiéme paramétre d'une chaine vide", function () {
    it("Cela doit retouner l'équivalent du tableau d'origine en entier (non filtré)", function () {
      var result = reduceByPatternAndKeyProperty(dataTest, 'animals.name', '')
      assert.deepStrictEqual(dataTest, result)
    })
  })
})

describe('Quatrième test de la fonction reduceByPatternAndKeyProperty', function () {
  describe("Test avec passage en troisiéme paramétre d'une chaine contenue dans tous les noms d'animaux", function () {
    it("Cela doit retouner l'équivalent du tableau d'origine en entier", function () {
      var result = reduceByPatternAndKeyProperty(
        dataTest,
        'animals.name',
        'animal'
      )
      assert.deepStrictEqual(dataTest, result)
    })
  })
})

describe('Cinquième test de la fonction reduceByPatternAndKeyProperty', function () {
  describe("Test avec passage en troisiéme paramétre d'une chaine contenue dans aucun nom d'animal", function () {
    it('Cela doit retouner un tableau vide', function () {
      var result = reduceByPatternAndKeyProperty(
        dataTest,
        'animals.name',
        'TEST'
      )
      assert.equal(0, result.length)
    })
  })
})

describe('Sixième test de la fonction reduceByPatternAndKeyProperty', function () {
  describe("Test avec passage en troisiéme paramétre d'une chaine contenue dans certains noms d'animaux", function () {
    it("Cela doit retouner un tableau filtré tel qu'attendu", function () {
      var result = reduceByPatternAndKeyProperty(
        dataTest,
        'animals.name',
        'First'
      )
      assert.deepStrictEqual(dataTestFiltered, result)
    })
  })
})

/*
 * Tests countArrayChildren
 */
describe('Premier test de la fonction countArrayChildren', function () {
  describe("Test avec passage en premier paramétre d'un objet vide", function () {
    it('Cela doit retouner un tableau vide', function () {
      var result = countArrayChildren([])
      assert.equal(0, result.length)
    })
  })
})

describe('Second test de la fonction countArrayChildren', function () {
  describe("Test avec passage de l'objet dataTest", function () {
    it("Cela doit retouner un tableau tel qu'attendu", function () {
      var result = countArrayChildren(dataTest)
      assert.deepStrictEqual(dataTestCount, result)
    })
  })
})
