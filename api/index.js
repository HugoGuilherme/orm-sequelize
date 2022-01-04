const express = require('express');
const routes = require('./routes/index')
const app = express();

const port = 3000;

routes(app)

app.listen(port, () => console.log('Servidor rodando na porta 3000'))

module.exports = app;