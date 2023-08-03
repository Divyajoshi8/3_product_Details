const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  try {
    const { productName, totalPrice, category } = req.body;
    await Product.create({
      productName,
      totalPrice,
      category,
    });
    res.redirect('/');
  } catch (error) {
    console.error('Error creating product:', error);
    res.send('Error creating product.');
  }
};

exports.getProductList = async (req, res) => {
  try {
    const { category } = req.query; // Read the 'category' parameter from the query string
    let categoryList;

    if (category) {
      categoryList = await Product.findAll({ where: { category } });
    } else {
      categoryList = await Product.findAll();
    }

    res.render('index.html', { categoryList, selectedCategory: category });
  } catch (error) {
    console.error('Error getting products:', error);
    res.send('Error getting products.');
  }
};
