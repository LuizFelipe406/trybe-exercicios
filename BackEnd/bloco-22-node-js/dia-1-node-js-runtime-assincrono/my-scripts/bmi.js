const readline = require('readline-sync');

const bmiCalculator = (weight, height) => weight / (height ^ 2);

const userWeight = readline.questionFloat("What's your weight? ");
const userHeight = readline.questionFloat("What's your height? ");
const userBMI = bmiCalculator(userWeight, userHeight)
console.log(`Seu IMC é: ${userBMI}, `);
switch (true) {
  case (userBMI < 18.5):
    console.log("Abaixo do peso (magreza)");
    break;
  case (userBMI >= 18.5 && userBMI <= 24.9):
    console.log("Peso Normal");
    break;
  case (userBMI >= 25 && userBMI <= 29.9):
    console.log("Acima do peso (sobrepeso)");
    break;
  case (userBMI >= 30 && userBMI <= 34.9):
    console.log("Obesidade grau I");
    break;
  case (userBMI >= 35 && userBMI <= 39.9):
    console.log("	Obesidade grau II");
    break;
  case (userBMI >= 40):
    console.log("Obesidade graus III e IV");
    break;
  default: console.log("Oops, aconteceu algum erro");
};