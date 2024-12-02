const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products'); // Caminho para o arquivo de rotas

const app = express();

mongoose.connect('mongodb://localhost:27017/seu_banco', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

app.use(bodyParser.json());
app.use('/products', productRoutes); // Registrar rotas

const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
