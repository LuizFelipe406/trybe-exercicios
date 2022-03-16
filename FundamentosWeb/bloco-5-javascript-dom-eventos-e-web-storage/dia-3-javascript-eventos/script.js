function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDays() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.innerText = dezDaysList[i];
    day.classList.add('day');
    if (day.innerText == 24 || day.innerText == 25 || day.innerText == 31) {
      day.classList.add('holiday');
    }
    if (day.innerText == 4 || day.innerText == 11 || day.innerText == 18 || day.innerText == 25) {
      day.classList.add('friday');
    }
    document.getElementById('days').appendChild(day);
  }
}

createDays();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonsHoli(frase) {
  let button = document.createElement('button');
  button.innerText = frase;
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button);
}
createButtonsHoli('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

document.getElementById('btn-holiday').addEventListener('click', holidayClick);

function holidayClick() {
  let background = document.getElementsByClassName('holiday');
  for (let i = 0; i < background.length; i += 1) {
    if (background[i].style.backgroundColor !== 'rgb(47, 193, 140)') {
      background[i].style.backgroundColor = 'rgb(47, 193, 140)'
    } else {
      background[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtonsFri(frase) {
  let button = document.createElement('button');
  button.innerText = frase;
  button.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(button);
}
createButtonsFri('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

document.getElementById('btn-friday').addEventListener('click', fridayClick);

function fridayClick() {
  let text = document.getElementsByClassName('friday');
  let salvar = [];
  for (let index = 5; index < dezDaysList.length; index += 7) {
    salvar.push(dezDaysList[index]);
  }
  for (let i = 0; i < text.length; i += 1) {
    if (text[i].innerText !== 'SEXTOU') {
      text[i].innerText = 'SEXTOU'
      console.log(salvar);
    } else {
      text[i].innerText = salvar[i];
    }
  }
}

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

let day = document.getElementsByClassName('day');

for (let i = 0; i < day.length; i += 1) {
  day[i].addEventListener('mouseover', zoomIn)
  function zoomIn(){
    day[i].style.fontSize = '30px';
  }
  day[i].addEventListener('mouseleave', zoomOut)
  function zoomOut(){
    day[i].style.fontSize = '20px';
  }
}


