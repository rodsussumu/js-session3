//Filter
//Retornar numeros maiores que 10
const numeros = [5, 50, 80, 60, 1, 2, 3, 4, 41, 10, 12, 18, 9]
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

//Retornar nomes com 6 letras ou mais
//Retornar pessoas com mais de 50 anos
const pessoas = [
    {nome: 'rodrigo', idade: 56},
    {nome: 'caio', idade: 30},
    {nome: 'ana', idade: 25},
    {nome: 'pedro', idade: 62},
    {nome: 'marcelo', idade: 57},
    {nome: 'giovanna', idade: 19},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6 && obj.idade > 50)
console.log(pessoasComNomeGrande)

const pessoasIdade = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasIdade)

const pessoasComNomeTerminaO = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('o'))
console.log(pessoasComNomeTerminaO)
