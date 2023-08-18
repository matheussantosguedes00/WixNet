const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '99747974',
  database: 'almoxarifado',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

app.get('/api/produtos', (req, res) => {
  db.query('SELECT * FROM cadastrodeprodutos ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.post('/api/produtos', (req, res) => {
  const novoProduto = req.body;
  db.query('INSERT INTO cadastrodeprodutos SET ?', novoProduto, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/produtos/:id', (req, res) => {
  const id = req.params['id'];
  const produtoAtualizado = req.body;
  db.query('UPDATE cadastrodeprodutos SET ? WHERE id = ?', [produtoAtualizado, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/produtos/:id', (req, res) => {
  const id = req.params['id'];
  db.query('DELETE FROM cadastrodeprodutos WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});





app.get('/api/lojas', (req, res) => {
  db.query('SELECT * FROM cadastrodelojas ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.post('/api/lojas', (req, res) => {
  const novoLoja = req.body;
  db.query('INSERT INTO cadastrodelojas SET ?', novoLoja, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/lojas/:id', (req, res) => {
  const id = req.params['id'];
  const lojaAtualizado = req.body;
  db.query('UPDATE cadastrodelojas SET ? WHERE id = ?', [lojaAtualizado, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/lojas/:id', (req, res) => {
  const id = req.params['id'];
  db.query('DELETE FROM cadastrodelojas WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});





app.get('/api/fornecedores', (req, res) => {
  db.query('SELECT * FROM cadastrodefornecedores ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.post('/api/fornecedores', (req, res) => {
  const novoLoja = req.body;
  db.query('INSERT INTO cadastrodefornecedores SET ?', novoLoja, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/fornecedores/:id', (req, res) => {
  const id = req.params['id'];
  const lojaAtualizado = req.body;
  db.query('UPDATE cadastrodefornecedores SET ? WHERE id = ?', [lojaAtualizado, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/fornecedores/:id', (req, res) => {
  const id = req.params['id'];
  db.query('DELETE FROM cadastrodefornecedores WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
