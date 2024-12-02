
const express = require("express");
const router = express.Router();
const { Cart, CartItem, Product } = require("../models");

router.post("/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const product = await Product.findByPk(productId);
  if (!product) return res.status(404).json({ error: "Product not found" });

  const cartItem = await CartItem.create({
    productId,
    quantity,
    totalPrice: product.price * quantity,
  });

  res.status(201).json(cartItem);
});

router.delete("/remove/:id", async (req, res) => {
  const { id } = req.params;
  await CartItem.destroy({ where: { id } });
  res.sendStatus(204);
});

router.get("/", async (req, res) => {
  const cartItems = await Cart.findAll({ include: ["items"] });
  res.json(cartItems);
});

module.exports = router;
