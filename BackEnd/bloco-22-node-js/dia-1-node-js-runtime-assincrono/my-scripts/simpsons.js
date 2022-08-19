const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

const readAll = () => simpsons.forEach((char) => console.log(`${char.id} - ${char.name}`));

// readAll();

const findById = (id) => {
  const char = new Promise((resolve, reject) => {
    const simpsonChar = simpsons.find((character) => parseInt(character.id) === id);
    if (!simpsonChar) { reject("id não encontrado") }
    else { resolve(`${simpsonChar.id} - ${simpsonChar.name}`) }
  })
  return char;
}

// findById(1)
//   .then(result => console.log(`Encontrei: ${result}`))
//   .catch(err => console.log(`Erro: ${err}`));

const remove10And6 = async () => {
  const newJson = simpsons.filter((char) => char.id !== '10' && char.id !== '6');
  console.log(newJson);
  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(newJson));
    console.log("Escrito com sucesso");
  } catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

// remove10And6();

const createNewSimpsons = async () => {
  const simpsJSON = await fs.readFile('./simpsons.json', 'utf-8');
  const simps = JSON.parse(simpsJSON);
  const newSimps = simps.filter((char) => parseInt(char.id) <= 4);
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimps));
    console.log("Escrito com sucesso");
  } catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

// createNewSimpsons();

const addNelson = async () => {
  const simpsFamilyJSON = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsFamily = JSON.parse(simpsFamilyJSON);
  const newSimps = [
    ...simpsFamily,
    {
      id: '5',
      name: 'Nelson Muntz',
    }
  ]
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimps));
    console.log("Escrito com sucesso");
  } catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

// addNelson();

const replaceNelson = async () => {
  const simpsFamilyJSON = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsFamily = JSON.parse(simpsFamilyJSON);
  const newSimps = simpsFamily.map((char) => {
    if (char.name.includes('Nelson')) {
      return {
        ...char,
        name: 'Maggie Simpson'
    };
  } else return char;
  })
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimps));
    console.log("Escrito com sucesso");
  } catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

replaceNelson();