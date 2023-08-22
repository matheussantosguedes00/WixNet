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

app.get('/api/tarefas', (req, res) => {
  db.query('SELECT * FROM tarefas ORDER BY id DESC', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/api/tarefas', (req, res) => {
  const novoTarefa = req.body;
  db.query('INSERT INTO tarefas SET ?', novoTarefa, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/tarefas/:id', (req, res) => {
  const id = req.params.id;
  const tarefaAtualizada = req.body;
  db.query('UPDATE tarefas SET ? WHERE id = ?', [tarefaAtualizada, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/tarefas/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM tarefas WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/tarefas/filtrar', (req, res) => {
  const { responsavel, prioridade, status } = req.query;
  let query = 'SELECT * FROM tarefas WHERE 1=1'; // Comece com uma consulta que sempre seja verdadeira

  if (responsavel) {
    query += ` AND responsavel = '${responsavel}'`;
  }

  if (prioridade) {
    query += ` AND prioridade = '${prioridade}'`;
  }

  if (status) {
    query += ` AND status = '${status}'`;
  }

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
