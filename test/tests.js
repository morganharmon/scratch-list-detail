import './example.test.js';
import { findById } from '../utils.js';
import { animals } from '../animaldata.js';
import { renderAnimal } from '../utils.js';

const test = QUnit.test;

test('renderAnimal returns a div containing animal properties', (expect) => {
    const expected = `<a href="./animals/index.html?id=1"><div class="animal"><h2>Bear</h2><img src="./assets/bear.webp" alt="animal"></div></a>`;
    const actual = renderAnimal(findById('1', animals));
    expect.equal(actual.outerHTML, expected);

});