const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.log('Erro ao escrever arquivo', error.message);
  } 
}

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.length;
}

const getChocolatesByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((choc) => choc.name.includes(name))
};

const updateChocolateById = async (id, name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const findById = cacauTrybe.chocolates.find((choc) => choc.id === id);

  if ( findById === undefined ) { return null }

  const newChocolates = cacauTrybe.chocolates.map((choc) => {
    if (choc.id === id) {
      return {
        ...choc,
        name,
        brandId
      }
    } else {
      return choc
    }
  });
  writeCacauTrybeFile({...cacauTrybe, chocolates: newChocolates });
  return newChocolates.find((choc) => choc.id === id);
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalChocolates,
    getChocolatesByName,
    updateChocolateById
};