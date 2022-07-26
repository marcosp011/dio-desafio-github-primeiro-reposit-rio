const lista = [
    {
        nome:'Barra de Whey',
        preco: 6,
    },
    {
        nome:'Garrafa térmica',
        preco: 15,
    },
    {
        nome:'BCAA',
        preco: 45,
    },
];

const saldaDisponivel = 150;

function calculaSaldo(saldaDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada", index+ 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldaDisponivel)
}

console.log(calculaSaldo(saldaDisponivel, lista));