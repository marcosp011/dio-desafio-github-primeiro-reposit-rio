function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 ={
    nome: 'Malcom',
    idade: 25
}
const pessoa2 ={
    nome: 'Marcia',
    idade: 35
}
const animal ={
    nome: 'Lufy',
    idade: 5,
    raca: 'Pug',
};

console.log(calculaIdade.apply(animal, [7]));
// console.log(calculaIdade.call(animal, 4));
