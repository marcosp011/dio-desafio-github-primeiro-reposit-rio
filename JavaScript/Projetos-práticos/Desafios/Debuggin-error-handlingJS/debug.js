function validaArray(arr, num){
try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");
    
    if(typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("O Num precisa ser do tipo number");

    if(arr.length !== num) throw new RangeError("Tamanho invalido");

    return arr;
}

catch(e) {
    if(e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError")
        console.log(e.message)
    } else if(e instanceof TypeError){
        console.log("Este erro é um TypeError")
        console.log(e.message)
    } else if(e instanceof RangeError){
        console.log("Este erro é um RengeError")
        console.log(e.message)
    } else {
        console.log("Tipo de erro não esperado:" +e);
    }
}
}

console.log(validaArray([1, 2, 3, 4, 5], 5));
// console.log(validaArray()); = ReferenceError
// console.log(validaArray(5,5)); = TypeError
// console.log(validaArray([], 'a')); = TypeError
// console.log(validaArray([], 5)); = RangeError