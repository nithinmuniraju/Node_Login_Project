const http = require('http');

const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended : true}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

// const server = http.createServer(app)
// server.listen(3001);
app.listen(3000);

