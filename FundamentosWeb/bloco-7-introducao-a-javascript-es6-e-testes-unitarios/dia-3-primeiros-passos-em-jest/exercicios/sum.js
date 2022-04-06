function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

function encode(string) {
  let newWord = string.split("");
  let codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i in string) {
    for (let key in codigo) {
      if (string[i] === key) {
        newWord[i] = codigo[key];
      }
    }
  }
  return newWord.join("");
}

function decode(string) {
  let newWord = string.split("");
  let codigo = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  for (let i in string) {
    for (let key in codigo) {
      if (string[i] === key) {
        newWord[i] = codigo[key];
      }
    }
  }
  return newWord.join("");
}

const techList = (array, nome) => {
  const arrayOrdenated = array.sort();
  if(array.length === 0){
    return "Vazio!";
  }
  const lista = [];
  for (let i = 0; i < arrayOrdenated.length; i += 1){
    const obj = {
      tech: arrayOrdenated[i],
      name: nome,
    }
    lista.push(obj);
  }
  return lista;
}

const hydrate = (string) => {
  const stringArray = string.match(/\d+/g);
  let quant = 0;
  const numbers = [];
  for (let i = 0; i < stringArray.length; i += 1) {
    numbers.push(parseInt(stringArray[i], 10));
  }
  for (let i = 0; i < numbers.length; i += 1) {
    quant += numbers[i];
  } if (quant === 1) {
    return `${quant} copo de água`;
  } return `${quant} copos de água`;
}


// implemente seus testes aqui

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };
