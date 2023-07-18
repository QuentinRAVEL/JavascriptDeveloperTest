const { data } = require('../../data/data.js')

/*
 * function getAllCountries
 *
 * Renvoie les données contenu dans le fichier data.js
 */
function getAllCountries () {
  return data
}

/*
 * function reduceByPatternAnimalName
 *
 * paramétre "countries" : l'objet JSON correspondant à la liste des pays/personnes/animaux à filtrer
 * paramétre "pattern" : la chaîne de caractére à trouver dans le nom de l'animal (sensible à la casse)
 *
 * Renvoie l'objet JSON filtré, via la fonction "reduce", sur les noms d'animaux (par personne et pays)
 */
function reduceAndFilterByPatternAnimalName (countries, pattern) {
  // on applique la fonction reduce pour chaque pays
  return countries.reduce((c, country) => {
    // on applique la fonction reduce pour chaque personne
    let people = country.people.reduce((p, person) => {
      // On filtre les animaux de la personne sur le fait que le nom de l'animal contient le pattern.
      let animals = person.animals.filter(
        animal => animal.name.indexOf(pattern) > -1
      )
      // Si le tableau (des animaux) n'est pas vide, on l'ajoute à l'accumulateur (des personnes)
      if (animals.length) p.push({ name: person.name, animals: animals })
      return p
    }, [])
    // Si le tableau (des personnes) n'est pas vide, on l'ajoute à l'accumulateur (des pays)
    if (people.length) c.push({ name: country.name, people: people })
    return c
  }, [])
}

/*
 * function countPeopleAndAnimals
 *
 * paramétre "countries" : l'objet JSON correspondant à la liste des pays/personnes/animaux à filtrer
 *
 * Renvoie l'objet JSON complété par la comptabilisation des personnes et animaux
 * 
 * Cette fonction utilise map pour compléter le nom de chaque noeud parent (pays et personne) par leur nombre d'enfants (personnes et animaux)
 */
function countPeopleAndAnimals (countries) {
  return countries.map(country => {
    return {
      name: country.name + ' [' + country.people.length + ']',
      people: country.people.map(person => {
        return {
          name: person.name + ' [' + person.animals.length + ']',
          animals: person.animals
        }
      })
    }
  })
}

module.exports = {
  getAllCountries,
  reduceAndFilterByPatternAnimalName,
  countPeopleAndAnimals
}
