
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  });

  Cart.associate = (models) => {
    Cart.hasMany(models.CartItem, { as: "items" });
  };

  return Cart;
};

module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define("CartItem", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  });
  return CartItem;
};
