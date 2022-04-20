const API_URL = 'https://api.coincap.io/v2/assets';
const criptoList = document.querySelector('#criptosList');
const fetchCripto = () => {
  fetch(API_URL)
  .then(response => response.json())
  .then(object => {
    const top10 = object.data.filter(data => parseInt(data.rank) < 11);
    top10.forEach(cripto => {
      const text = `${cripto.name} (${cripto.symbol}): ${parseFloat(cripto.priceUsd).toFixed(2)}`;
      const list = document.createElement('li');
      list.innerText = text;
      criptoList.appendChild(list);
    })
  }).catch(error => {
    console.error(error);
  });
};

window.onload = () => fetchCripto();