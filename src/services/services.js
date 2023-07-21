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
 * paramétre "countries" : l'objet JS correspondant à la liste des pays/personnes/animaux à filtrer
 * paramétre "pattern" : la chaîne de caractére à trouver dans le nom de l'animal (sensible à la casse)
 *
 * Renvoie l'objet JS filtré, via la fonction "reduce", sur les noms d'animaux (par personne et pays)
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
 * function reduceByPatternAndKeyObject
 *
 * paramétre "objets" : l'objet JS à filtrer
 * paramétre "keyAndPropertySearch" : la clé de l'objet et la propriété sur laquelle le filtre doit s'appliquer ("animals.name" => clé "animals", propriété "name")
 * paramétre "pattern" : la chaîne de caractére à trouver dans la valeur correspondant à la clé (sensible à la casse)
 *
 * Renvoie l'objet JS filtré, via la fonction "reduce", sur la valeur de la clé recherchée (keySearch)
 */
function reduceByPatternAndKeyProperty (objets, keyAndPropertySearch, pattern) {

  if (keyAndPropertySearch.indexOf(".") === -1) return [];

  let keySearch = keyAndPropertySearch.split(".")[0];
  let property = keyAndPropertySearch.split(".")[1];

  return objets.reduce((acc, objet) => {
    let countChildren = 0;
    for (const [key, value] of Object.entries(objet)) {
      if (key === keySearch && Array.isArray(value)) {
        objet[key] =  value.filter(obj => obj[property].indexOf(pattern) > -1);
        countChildren =  objet[key].length;
      }
      else if (Array.isArray(value)) {
        objet[key] = reduceByPatternAndKeyProperty(value, keyAndPropertySearch, pattern);
        countChildren =  objet[key].length;
      }
      else {
        objet[key] = value;
      }
    }
    if (countChildren)
      acc.push(objet);
    return acc
  }, [])
}

/*
 * function countArrayChildren
 *
 * paramétre "objets" : le tableau d'objet JS correspondant à la liste des noeuds enfants (si tableau) à comptabiliser
 *
 * Renvoie l'objet JS complété par la comptabilisation des noeuds enfants (si tableau)
 *
 * Cette fonction utilise map pour compléter le nom de chaque noeud parent par leur nombre d'enfants (si tableau)
 */
function countArrayChildren (objets) {
  return objets.map(objet => {
    for (const [key, value] of Object.entries(objet)) {
      if (Array.isArray(value)) {
        objet.name = objet.name + ' [' + value.length + ']'
        objet[key] = countArrayChildren(value);
      }
    }
    return objet;
  })
}

/*
 * function countPeopleAndAnimals
 *
 * paramétre "countries" : l'objet JS correspondant à la liste des pays/personnes/animaux à filtrer
 *
 * Renvoie l'objet JS complété par la comptabilisation des personnes et animaux
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
  countPeopleAndAnimals,
  countArrayChildren,
  reduceByPatternAndKeyProperty
}
