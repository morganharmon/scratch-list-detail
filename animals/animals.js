import { animals } from '../animaldata.js';
import { findById } from '../utils.js';

const animalInfo = document.getElementById('animalInfo');
const animalName = document.getElementById('animalName');
const animalImg = document.getElementById('animalImg');

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

animalName.textContent = animal.type;
animalImg.src = `../assets/${animal.type}.webp`;
animalInfo.textContent = `The ${animal.type.toLowerCase()} is of ${animal.size} size and is know for ${animal.behaviors}.`;