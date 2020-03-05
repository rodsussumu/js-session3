// Retornar a soma dos numeros(reduce)
const numeros = [5, 50, 80, 60, 1, 2, 3, 4, 41, 10, 12, 18, 9];
const total = numeros.reduce(function(acumulador, valor, indice, arrary) {
    acumulador+=valor;
    return acumulador;
})
// console.log(total);

//REtorne a pessoa mais velha
const pessoas = [
    {nome: 'rodrigo', idade: 56},
    {nome: 'caio', idade: 30},
    {nome: 'ana', idade: 25},
    {nome: 'pedro', idade: 62},
    {nome: 'marcelo', idade: 57},
    {nome: 'giovanna', idade: 19},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha)

