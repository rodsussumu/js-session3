// Retornar o dobro
const numeros = [5, 50, 80, 60, 1, 2, 3, 4, 41, 10, 12, 18, 9];
const numerosEmDobro = numeros.map((valor)=> valor * 2
);
// console.log(numerosEmDobro)

//para cada elemento
//retorne apenas uma string com o nome das pessoas
//remova apenas a chave nome do objeto
//adicione uma chave id para cada objeto
const pessoas = [
    {nome: 'rodrigo', idade: 56},
    {nome: 'caio', idade: 30},
    {nome: 'ana', idade: 25},
    {nome: 'pedro', idade: 62},
    {nome: 'marcelo', idade: 57},
    {nome: 'giovanna', idade: 19},
];
const nomes = pessoas.map((objeto)=> objeto.nome)
const idades = pessoas.map(function(obj){idade : obj.idade})
const id = pessoas.map(function(obj){
    const id = Math.random() * 100;
    obj.id = Math.floor(id);
    return obj
})
console.log(id);
