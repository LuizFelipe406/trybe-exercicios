const express = require('express');
const taskDB = require('../db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const task = req.body;

  const [response] = await taskDB.insert(task);

  if(!response) return res.status(500).json({ message: 'Erro interno no servidor' });
  return res.status(201).json({ message: `Tarefa cadastrada com o id: ${response.insertId}` });
})

router.put('/:id', async (req,res) => {
  const { id } = req.params;
  const task = req.body;

  const [response] = await taskDB.update(task, id);

  if(response.affectedRows === 0) return res.status(404).json({ message: 'Tarefa não encontrada'});

  return res.status(200).json({ message: `Tarefa com id ${id} atualizada com sucesso!`});
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const [response] = await taskDB.remove(id);

  if(response.affectedRows === 0) return res.status(404).json({ message: 'Tarefa não encontrada'});

  return res.status(200).json({ message: `Tarefa com id ${id} deletada com sucesso!`});
})

router.get('/', async (req, res) => {
  const [response] = await taskDB.findAll();

  if(!response) return res.status(500).json({ message: 'Erro interno no servidor' });

  return res.status(200).json(response);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [[response]] = await taskDB.findById(id);
    if(!response) return res.status(404).json({ message: 'Tarefa não encontrada' });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
  
})


module.exports = router;