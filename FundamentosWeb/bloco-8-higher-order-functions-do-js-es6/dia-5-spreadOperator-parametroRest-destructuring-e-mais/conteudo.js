//spread operator 
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'leite ninho', 'cacau'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional];
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));

//rest
// o ...args 'empacota' todos os argumentos recebidos pela função dentro de um array.
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

//object destructuring
// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const infoUserJob = {...user, ...jobInfos};

// Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

const {name: nome, age: idade, nationality, profession, squadInitials, squad} = infoUserJob;

console.log(`Hi, my name is ${nome}, I'm ${idade} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
);

//Array Destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// 1-Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes1 = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes1[1](saudacoes1[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const saudacoes2 = ['Olá', (saudacao) => console.log(saudacao)];

const [ola, funcao] = saudacoes2;

funcao(ola);

// 2-A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const array = [comida, animal, bebida];
[animal,bebida,comida] = array;
console.log(comida,animal,bebida);

// 3-array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const [impar1, impar2, impar3, par1, par2, par3, par4] = numerosPares;

numerosPares = [par1, par2, par3, par4];
console.log(numerosPares);

//Default Destructuring
//se você quisesse dar um valor padrão para nationality , caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring , que é mais um recurso do ES6:
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nacionalidade = 'Brazilian' } = person;
console.log(nacionalidade); // Brazilian

//Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

//Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const pessoa = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(pessoa));

//Object Property Shorthand
// podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

//Default Parameters

//Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido a função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário.

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));