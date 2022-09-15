const BookService = require('../services/Books.service');

const getAll = async (req, res) => {
  const response = await BookService.getAll();
  res.status(200).json(response);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await BookService.getById(id);
  if (!response) return res.status(404).json({ "message": "Book not found " });
  return res.status(200).json(response);
}

const create = async (req, res) => {
  const response = await BookService.create(req.body);
  res.status(201).json(response);
}

const update = async (req, res) => {
  const { id } = req.params;
  const response = await BookService.update(id, req.body);
  if (!response) return res.status(404).json({ "message": "Book not found " });
  return res.status(200).json({ "message": "Book updated!" });
}

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const response = await BookService.deleteBook(id);
  if (!response) return res.status(500).json({ "message": "Algo deu errado!"});
  return res.status(200).json({ "message": "Book Deleted!" });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
};