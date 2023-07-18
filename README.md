# Javascript Developer Test

Ce programme implémente une interface en ligne de commande en Node.js.

Deux fonctionnalités sont possibles :

1) Il permet de filter un object JSON de type :
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

2) Il permet de visualiser le nombre _de noeuds enfants_ de chaque objet _pays_ ou _personne_ :

Le résulat obtenu sera un objet de la forme :
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

### Pré-requis

Le fichier de données doit se trouver dans un repértoire _"data"_ et s'appeler _"data.js"_.

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


