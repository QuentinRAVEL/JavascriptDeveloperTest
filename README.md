# Javascript Developer Test

Ce programme implémente une interface en ligne de commande en Node.js.

Deux fonctionnalités sont possibles :

- Il permet de filter un tableau du type :
```Javascript
const data = [
  {
    name: 'First Land',
    people: [
      {
        name: 'First Person',
        animals: [
          { name: 'First animal' }
        ]
      },
      {
        name: 'Second Person',
        animals: [
          { name: 'First animal' },  
          { name: 'Second animal' }
        ]
      }
    ]
  }
]
```
pour ne renvoyer que les pays/personnes dont les noms des animaux contiennent un certain "pattern".

- Il permet de visualiser le nombre _de noeuds enfants_ de chaque objet _pays_ ou _personne_ :

Le résulat obtenu sera un tableau de la forme :
```Javascript
const data = [
  {
    name: 'First Land [2]',
    people: [
      {
        name: 'First Person [1]',
        animals: [
          { name: 'First animal' }
        ]
      },
      {
        name: 'Second Person [2]',
        animals: [
          { name: 'First animal' },  
          { name: 'Second animal' }
        ]
      }
    ]
  }
]
```

### Structure du projet

- *README.md* : ce fichier d'aide
- *data/data.js* : le fichier de données utilisé par le programme principal
- *src/app.js* : le fichier de programme principal
- *src/services/services.js* : le fichier de méthodes utilitaires utilisées par le programme principal
- *test/test.services.js* : le fichier des tests unitaires des méthodes utilitaires utilisées par le programme principal

### Pré-requis

Le fichier de données doit se trouver dans un repértoire *"data"* et s'appeler *"data.js"* comme décrit dans le précédent paragraphe.

### Installation

Pour installer la librairie Mocha pour les tests :

```bash
npm install mocha
```
ou
```bash
npm install -g mocha
```

## Démarrage

Au moins un des deux arguments suivants doit être passé en paramétre de ce programme :'

```bash
--count
```
Permet de visualiser la comptabilisation du nombre de personnes par pays et d'animaux par personne.

```bash
--filter=pattern
```
Permet de filtrer les pays/personnes/animaux si la chaîne de caractère _'pattern'_ est contenu dans le nom de l'animal, le filtre est sensible à la casse.

En l'absence de l'un ou l'autre de ces paramétres de commande, une aide sera affichée.

### Exemple de lancement du programme

- node src/app.js --filter=ry
- node src/app.js --filter=Zoo
- node src/app.js --filter=Test
- node src/app.js --count

## Tests

Pour lancer les tests unitaires correspondant aux fonctions utilisées par l'application, contenues dans le fichier ./src/services/services.js :

```bash
mocha ./test/services.test.js
```
ou directement dans le répertoire principal (contenant ce _README.md_) :
```bash
mocha
```

## Versions
**Dernière version stable :** 1.0

## Auteurs

* **Quentin RAVEL** 


