const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const shopRoutes = require('./Routes/shop');
const adminRoutes = require('./Routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static(path.join(__dirname, 'Public')));

app.use(shopRoutes);
app.use('/admin',adminRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('404', { 
        pageTitle: "Page not found",
        path: ''
    });
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // res.send('<h1> Page Not Found</h1>');
})
// const server = http.createServer(app)
// server.listen(3001);
app.listen(3000);

