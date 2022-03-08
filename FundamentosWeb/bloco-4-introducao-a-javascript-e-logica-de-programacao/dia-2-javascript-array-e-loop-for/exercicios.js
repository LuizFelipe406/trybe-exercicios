let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let a = 0; a < numbers.length; a += 1) {
    console.log(numbers[a]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let b = 0; b < numbers.length; b += 1) {
    soma = soma + numbers[b];
}
console.log("A soma dos elementos é:", soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = 0;
media = soma / numbers.length;
console.log("A media dos elementos é:", media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for (c = 0; c < numbers.length; c += 1) {
    if (maior < numbers[c]) {
        maior = numbers[c];
    }
}
console.log("O maior Valor é:", maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numImpar = 0;
let impar = [];
for (d = 0; d < numbers.length; d += 1) {
    if (numbers[d] % 2 !== 0) {
        numImpar = numImpar + 1;
        impar.push(numbers[d]);
    }
}
if (impar !== 0) {
    console.log("Existem ", numImpar, "numeros ímpares no array:", impar);
}
else {
    console.log("nenhum valor ímpar encontrado.");
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (e = 0; e < numbers.length; e += 1) {
    if (menor > numbers[e]) {
        menor = numbers[e];
    }
}
console.log("O menor Valor é:", menor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
for (f = 1; f <= 25; f += 1) {
    numbers.push(f);
}
console.log(numbers);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let newArray = [];
for (g = 0; g < numbers.length; g += 1) {
    newArray.push(numbers[g]/2);
}
console.log(newArray);