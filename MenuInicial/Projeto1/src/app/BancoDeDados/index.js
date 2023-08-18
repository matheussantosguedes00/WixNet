const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware para analisar o corpo das requisições como JSON
app.use(cors()); // Middleware para permitir requisições de diferentes origens (CORS)

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost', // Endereço do banco de dados MySQL
  user: 'root', // Nome de usuário para acesso ao banco
  password: '0000000000', // Senha para acesso ao banco
  database: 'almoxarifado', // Nome da base de dados
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

// Rotas para operações relacionadas a produtos
app.get('/api/produtos', (req, res) => {
  // Consulta para obter todos os registros de produtos ordenados pelo ID descendente
  db.query('SELECT * FROM cadastrodeprodutos ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results); // Envia os resultados da consulta como resposta
  });
});
app.post('/api/produtos', (req, res) => {
  const novoProduto = req.body; // Dados do novo produto obtidos do corpo da requisição
  // Inserção de um novo registro na tabela de produtos com os dados fornecidos
  db.query('INSERT INTO cadastrodeprodutos SET ?', novoProduto, (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da inserção como resposta
  });
});
app.put('/api/produtos/:id', (req, res) => {
  const id = req.params['id']; // ID do produto a ser atualizado obtido dos parâmetros da URL
  const produtoAtualizado = req.body; // Novos dados do produto obtidos do corpo da requisição
  // Atualização do registro do produto com o ID correspondente usando os novos dados
  db.query('UPDATE cadastrodeprodutos SET ? WHERE id = ?', [produtoAtualizado, id], (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da atualização como resposta
  });
});
app.delete('/api/produtos/:id', (req, res) => {
  const id = req.params['id']; // ID do produto a ser deletado obtido dos parâmetros da URL
  // Exclusão do registro do produto com o ID correspondente
  db.query('DELETE FROM cadastrodeprodutos WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da exclusão como resposta
  });
});

// Rotas para operações relacionadas a lojas
app.get('/api/lojas', (req, res) => {
  // Consulta para obter todos os registros de lojas ordenados pelo ID descendente
  db.query('SELECT * FROM cadastrodelojas ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results); // Envia os resultados da consulta como resposta
  });
});
app.post('/api/lojas', (req, res) => {
  const novaLoja = req.body; // Dados da nova loja obtidos do corpo da requisição
  // Inserção de um novo registro na tabela de lojas com os dados fornecidos
  db.query('INSERT INTO cadastrodelojas SET ?', novaLoja, (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da inserção como resposta
  });
});
app.put('/api/lojas/:id', (req, res) => {
  const id = req.params['id']; // ID da loja a ser atualizada obtido dos parâmetros da URL
  const lojaAtualizada = req.body; // Novos dados da loja obtidos do corpo da requisição
  // Atualização do registro da loja com o ID correspondente usando os novos dados
  db.query('UPDATE cadastrodelojas SET ? WHERE id = ?', [lojaAtualizada, id], (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da atualização como resposta
  });
});
app.delete('/api/lojas/:id', (req, res) => {
  const id = req.params['id']; // ID da loja a ser deletada obtido dos parâmetros da URL
  // Exclusão do registro da loja com o ID correspondente
  db.query('DELETE FROM cadastrodelojas WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da exclusão como resposta
  });
});

// Rotas para operações relacionadas a fornecedores
app.get('/api/fornecedores', (req, res) => {
  // Consulta para obter todos os registros de fornecedores ordenados pelo ID descendente
  db.query('SELECT * FROM cadastrodefornecedores ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results); // Envia os resultados da consulta como resposta
  });
});
app.post('/api/fornecedores', (req, res) => {
  const novoFornecedor = req.body; // Dados do novo fornecedor obtidos do corpo da requisição
  // Inserção de um novo registro na tabela de fornecedores com os dados fornecidos
  db.query('INSERT INTO cadastrodefornecedores SET ?', novoFornecedor, (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da inserção como resposta
  });
});
app.put('/api/fornecedores/:id', (req, res) => {
  const id = req.params['id']; // ID do fornecedor a ser atualizado obtido dos parâmetros da URL
  const fornecedorAtualizado = req.body; // Novos dados do fornecedor obtidos do corpo da requisição
  // Atualização do registro do fornecedor com o ID correspondente usando os novos dados
  db.query('UPDATE cadastrodefornecedores SET ? WHERE id = ?', [fornecedorAtualizado, id], (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da atualização como resposta
  });
});
app.delete('/api/fornecedores/:id', (req, res) => {
  const id = req.params['id']; // ID do fornecedor a ser deletado obtido dos parâmetros da URL
  // Exclusão do registro do fornecedor com o ID correspondente
  db.query('DELETE FROM cadastrodefornecedores WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result); // Envia o resultado da exclusão como resposta
  });
});

// Inicialização do servidor e escuta na porta especificada
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
