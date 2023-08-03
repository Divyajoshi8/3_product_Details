const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', productRoutes);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
