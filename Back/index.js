
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const paymentRoutes = require("./routes/payment");

const app = express();
app.use(bodyParser.json());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/payment", paymentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
