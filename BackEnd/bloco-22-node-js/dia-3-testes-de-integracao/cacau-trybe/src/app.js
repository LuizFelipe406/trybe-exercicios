const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacauTrybe.getTotalChocolates();
  res.status(200).json({ totalChocolates });
})

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getChocolatesByName(name);

  if( chocolates.length === 0 ) {
    res.status(404).json({ chocolates });
  } else {
    res.status(200).json({ chocolates });
  }
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;

  const chocolate = await cacauTrybe.updateChocolateById(Number(id), name, brandId);

  if ( chocolate === null ) {
    res.status(404).json({ message: 'chocolate not found'});
  } else {
    res.status(200).json({ chocolate });
  }
})

module.exports = app;
