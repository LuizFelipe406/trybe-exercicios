// Throw e Try/Catch
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos");
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, "3"));

// parte 1-Adicionando novas chaves
const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

const addObject = (objeto, key, parametro) => {
  objeto[key] = parametro;
  return objeto;
};

console.log(addObject(customer, "lastName", "Ferreira"));

//parte 2-Object.keys
const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const skills = (objeto) => {
  const skills = Object.keys(objeto);
  for (let i = 0; i < skills.length; i += 1) {
    let frase = `${skills[i]}, Nível: ${objeto[skills[i]]}`;
    console.log(frase);
  }
};

console.log(skills(student2));

//parte 3 - Object.values
const student = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkill: "Ótimo",
};

const listSkillsValuesWithValues = (student) => Object.values(student);

console.log(listSkillsValuesWithValues(student));

//parte 4 - Object.entries
const países = {
  França: "Paris",
  Brasil: "Brasília",
  Espanha: "Madrid",
  Portugal: "Lisboa",
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for (index in pairKeyValue) {
  console.log("--------");
  console.log("País:", pairKeyValue[index][0]);
  console.log("Capital:", pairKeyValue[index][1]);
}
//parte 5 - Object.assign
const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);
