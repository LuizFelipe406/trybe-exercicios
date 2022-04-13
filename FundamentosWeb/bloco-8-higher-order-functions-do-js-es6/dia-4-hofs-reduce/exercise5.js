//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((acc, name) => {
    const nomeArray = name.toLowerCase().split('');
    acc += nomeArray.reduce(
      (acc, letra) => (letra === "a" ? (acc += 1) : acc),0);
    return acc;
  }, 0);
}

console.log(containsA());
