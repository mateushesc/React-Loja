const express = require('express');
const router = express.Router();
// Substitua pelo seu modelo ou lógica de banco de dados
const ProductModel = require('../models/ProductModel');

// Criar um novo produto
router.post('/', async (req, res) => {
    const { name, price, category } = req.body;
    try {
        const product = new ProductModel({ name, price, category });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao criar produto' });
    }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { name, price, category },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).send({ error: 'Produto não encontrado' });
        }
        res.send(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao atualizar produto' });
    }
});

// Excluir um produto
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send({ error: 'Produto não encontrado' });
        }
        res.send({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao excluir produto' });
    }
});

// Obter todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar produtos' });
    }
});

module.exports = router;
