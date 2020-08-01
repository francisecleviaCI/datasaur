const dinos = require('./dinos.js')

//factory function:

const makeDino = function(newSpecies, newPeriod, newDiet, newExtinct){
  if(newExtinct === undefined){
    newExtinct = false;
  }
  
  const newDino = {
    
    species: newSpecies,
    period: newPeriod,
    carnivore: newDiet,
    extinct: newExtinct,
  }
  return newDino;
}
makeDino('trex', 'cretaceous', true, false)



/********************
 * HELPER FUNCTIONS *
 ********************/

const makeSingular = function(dino){
  //make a new dino with the 'us' at the end of the species removed
  let newSpecies = '';
  if(dino.species.slice(-2) === 'us'){
    newSpecies = dino.species.slice(0, -2);
  } else {
    newSpecies = dino.species;
  }
  
  const newDino = makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct)

  //return that
  return newDino;
}

const truncateSpecies = function(dino){
let newSpecies = '';
if(dino.species.length < 10){
  newSpecies = dino.species;
} else {
  newSpecies = dino.species.substring(0, 7);
}

  const newDino = makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct)

  return newDino
}

const makeExtinct = function(dino) {
let newExtinct = '';
if(newExtinct !== undefined){
  newExtinct = true;
}


  const newDino = makeDino(dino.species, dino.period, dino.carnivore, newExtinct)

  return newDino

}



const isCarnivore = function(dino){
  return dino.carnivore === true
}

const isHerbivore = function(dino) {
  return dino.carnivore === false;
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function(dinos){
  return dinos.map(makeSingular)

  // console.log(newDinos)
  
}

const truncateDinos = function(dinos){
  return dinos.map(truncateSpecies)
}

const makeAllExtinct = function(dinos){
  return dinos.map(makeExtinct)
}


const carnivoresOnly = function(dinos){
  return dinos.filter(isCarnivore)
}

const herbivoresOnly = function (dinos) {
  return dinos.filter(isHerbivore)
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
