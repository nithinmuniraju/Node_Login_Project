const path = require('path');

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')

const shopRoutes = require('./Routes/shop');
const adminRoutes = require('./Routes/admin');
const pageNotFound = require('./controller/404');
const { config } = require('process');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static(path.join(__dirname, 'Public')));

app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use(pageNotFound.pageNotFound);

// const server = http.createServer(app)
// server.listen(3001);
app.listen(process.env.PORT);

