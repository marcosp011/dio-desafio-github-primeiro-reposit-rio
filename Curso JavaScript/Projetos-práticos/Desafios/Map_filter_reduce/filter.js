function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
    // Para puxar os ímpares, utilizar o operador de não lógico "!".
}

const meuArray = [1, 23, 54, 67, 30, 2, 4];

console.log(filtraPares(meuArray));