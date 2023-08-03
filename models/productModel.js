const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('product1_database', 'root', 'Divya@joshi8', {
  host: 'localhost',
  dialect: 'mysql',
});

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: true }) // Use { force: true } only if you want to drop and recreate the table on every server restart
  .then(() => {
    console.log('Database and table synced!');
  })
  .catch((err) => console.error('Error syncing database:', err));

module.exports = Product;
