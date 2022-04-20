const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const jokes = document.querySelector('#jokeContainer');
    jokes.innerText = data.joke;
  }).catch(error => {
    const jokes = document.querySelector('#jokeContainer');
    jokes.innerText = `Erro ao receber a piada: ${error}`;
  });
};

window.onload = () => fetchJoke();