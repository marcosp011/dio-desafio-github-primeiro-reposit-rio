const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos (arr){
    const mySet = new Set(arr);

    return [...mySet]
    // argumento rest.
}

console.log(valoresUnicos(meuArray));