const {
  getAllCountries,
  reduceAndFilterByPatternAnimalName,
  countPeopleAndAnimals
} = require('./services/services.js')


// Récupération des arguments et des commmandes à lancer
var myArgs = process.argv.slice(2)
const isFilterCmnd = myArgs.some(arg => arg.indexOf('--filter=') > -1)
const isCountCmd = myArgs.some(arg => arg.indexOf('--count') > -1)

// Si aucune commande à lancer n'a été detectée
if (!isFilterCmnd && !isCountCmd) {
  console.log(' ')
  console.log(
    'Au moins un des deux arguments suivants doit être passé en paramétre de ce programme :'
  )
  console.log('--count')
  console.log(
    "Permet de visualiser la comptabilisation du nombre de personnes par pays et d'animaux par personne."
  )
  console.log(' ')
  console.log('--filter=pattern')
  console.log(
    "Permet de filtrer les pays/personnes/animaux si la chaîne de caractère 'pattern' est contenu dans le nom de l'animal, le filtre est sensible à la casse."
  )
  console.log(' ')
} else {

  // Si la commande de filtre a été detectée
  if (isFilterCmnd) {
    argFilter = myArgs.find(arg => arg.indexOf('--filter=') > -1)
    pattern = argFilter.split('=')[1]
    console.log(' ')
    if (pattern.length === 0)
      console.log('Le pattern est vide, tout le tableau sera affiché.')
    else
      console.log('Affichage des pays/personnes/animaux filtrés par le pattern : ' + pattern)
    let countries = getAllCountries()
    let filterCountries = reduceAndFilterByPatternAnimalName(countries, pattern)
    if (filterCountries.length) {
      console.log(
          JSON.stringify(filterCountries, null, 2)
      )
    } else {
      console.log('Aucun élément n\'a été trouvé avec ce pattern.')
    }

    console.log(' ')
    console.log('------------------------')
  }

  // Si la commande de comptabilisation a été detectée
  if (isCountCmd) {
    console.log(' ')
    console.log(
      'Visualisation de la comptabilisation des noeuds enfants pour les noeuds parents (pays et personne).'
    )

    let countries = getAllCountries()
    console.log(JSON.stringify(countPeopleAndAnimals(countries), null, 2))

    console.log(' ')
    console.log('------------------------')
  }
}
