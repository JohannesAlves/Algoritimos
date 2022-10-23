// binary search consiste to get a mid of array and try to search the answer
let baixo = 0;
let alto = len - 1;
let meio = (baixo + alto) / 2;
let chute = lista[meio];

if (chute < item) {
    let baixo = meio + 1;
} else {
    let alto = meio - 1;
}

const list = [1, 2, 3, 4]; // etc...
