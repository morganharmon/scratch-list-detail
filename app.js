// import functions and grab DOM elements
import { animals } from './animaldata.js';
import { findById } from './utils.js';
import { renderAnimal } from './utils.js';

const animalsSec = document.getElementById('animals');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

for (let animal of animals) {
    animalsSec.append(renderAnimal(animal));
}
