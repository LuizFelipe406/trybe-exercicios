const connec = require('./connection');

const insert = (task) => connec.execute(
  `INSERT INTO tasks (nome, descricao)
    VALUES (?, ?)`,
    [task.nome, task.descricao]);

const update = (task, id) => connec.execute(
  `UPDATE tasks
   SET nome = ?, descricao = ? WHERE id = ?`,
  [task.nome, task.descricao, id]);

const remove = (id) => connec.execute(
  `DELETE FROM tasks WHERE id = ?`,
  [id]);

const findAll = () => connec.execute(`SELECT * FROM tasks`);

const findById = (id) => connec.execute(`SELECT * FROM tasks WHERE id = ?`, [id]);

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById
}