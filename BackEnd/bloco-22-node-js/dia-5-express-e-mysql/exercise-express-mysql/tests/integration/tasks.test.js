const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testa a Rota /tasks', function () {
  beforeEach(function () {
    sinon.stub(connection, 'execute')
      .resolves([{ insertId: 5 }]);
  })

  afterEach(function () {
    sinon.restore();
  })

  it ('testa a requisição POST /', async function () {
    const response = await chai
      .request(app)
      .post('/tasks')
      .send({
        "nome": "Dar banho no theo",
        "descricao": "Voltou fedido da escola"
      })

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({ message: "Tarefa cadastrada com o id: 5"})
  })
})
