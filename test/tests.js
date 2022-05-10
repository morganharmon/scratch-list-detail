import './example.test.js';
import { findById } from '../utils.js';
import { animals } from '../animaldata.js';
import { renderAnimal } from '../utils.js';

const test = QUnit.test;

// test('findById should return a div with animal details', (expect) => {
//     const expected = '{type: \'Bear\', id: \'1\', size:L \'large\', image: \'./assets/bear.webp\', behaviors: Array(3)}';

//     // const bear = {
//     //     type: 'Bear',
//     //     id: '1',
//     //     size: 'large',
//     //     image: './assets/bear.webp',
//     //     behaviors: ['hibernation', ' eating fish', ' and rooting through trash cans']
//     // };
//     console.log(findById('1', animals));

//     const actual = findById('1', animals);

//     expect.equal(actual.outerHTML, expected);

// });

test('renderAnimal returns a div containing animal properties', (expect) => {
    const expected = `<a href="./animals/index.html?id=1"><div class="animal"><h2>Bear</h2><img src="./assets/bear.webp" alt="animal"><p>The Bear is of large size and is know for hibernation, eating fish, and rooting through trash cans</p></div></a>`;
    const actual = renderAnimal(findById('1', animals));
    expect.equal(actual.outerHTML, expected);

});