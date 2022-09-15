const { Book } = require('../models');

const getAll = async () => Book.findAll();

const getById = async (id) => Book.findByPk(id);

const create = ({ title, author, pageQuantity }) => Book.create({ title, author, pageQuantity });

const update = (id, { title, author, pageQuantity }) => Book.update(
  {title, author, pageQuantity },
  { where: { id }},
);

const deleteBook = async (id) => Book.destroy(
  { where: { id } },
);

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook
}