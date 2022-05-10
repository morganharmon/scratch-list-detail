export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function renderAnimal(animal) {
    const anchor = document.createElement('a');
    anchor.href = `./animals/index.html?id=${animal.id}`;
    const div = document.createElement('div');
    div.classList.add('animal');
    const h2 = document.createElement('h2');
    h2.textContent = animal.type;
    // const p = document.createElement('p');
    // p.textContent = `The ${animal.type} is of ${animal.size} size and is know for ${animal.behaviors}`;
    const img = document.createElement('img');
    img.src = animal.image;
    img.alt = 'animal';

    anchor.append(div);
    div.append(h2, img);
    return anchor;
}