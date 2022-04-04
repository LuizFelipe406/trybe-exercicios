const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurn = (object, key, value) => {
      object[key] = value;
      return object;
  }

  addTurn(lesson2, 'turno', 'noite');

  const listKeys = (object) => Object.keys(object);

//   console.log(listKeys(lesson1));

  const objSize = (object) => Object.keys(object).length;

//   console.log(objSize(lesson1));

  const listValues = (object) => Object.values(object);

//   console.log(listValues(lesson1));

const allLessons = {
    lesson1: Object.assign({},lesson1),
    lesson2: Object.assign({},lesson2),
    lesson3: Object.assign({},lesson3),

}
//   console.log(allLessons);

const allStudants = () => allLessons['lesson1']['numeroEstudantes'] + allLessons['lesson2']['numeroEstudantes'] + allLessons['lesson3']['numeroEstudantes'];

// console.log(allStudants());

const getValueByNumber = (lesson, number) =>
    Object.entries(allLessons[lesson])[number][1];

// console.log(getValueByNumber('lesson1', 0));

const verifyPair = (lesson, chave, valor) => {
    const licao = Object.entries(allLessons[lesson]);
    let resultado = false;
    for (let i = 0; i < licao.length; i += 1){
        if(licao[i].includes(chave)){
            if (licao[i].includes(valor)) {
                resultado = true
            }
        }
    } return resultado;
}

console.log(verifyPair('lesson3', 'materia', 'Maria Clara'));