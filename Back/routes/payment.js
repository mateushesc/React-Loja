
const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");

router.post("/credit-card", async (req, res) => {
  const { userId, totalAmount } = req.body;
  const transaction = await Transaction.create({
    userId,
    totalAmount,
    paymentMethod: "credit-card",
    status: "completed",
  });
  res.status(201).json(transaction);
});

router.post("/pix", async (req, res) => {
  const { userId, totalAmount } = req.body;
  const transaction = await Transaction.create({
    userId,
    totalAmount,
    paymentMethod: "pix",
    status: "completed",
  });
  res.status(201).json(transaction);
});

router.get("/status/:transactionId", async (req, res) => {
  const { transactionId } = req.params;
  const transaction = await Transaction.findByPk(transactionId);
  if (!transaction) return res.status(404).json({ error: "Transaction not found" });
  res.json(transaction);
});

module.exports = router;
