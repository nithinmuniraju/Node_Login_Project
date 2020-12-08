const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('Add Product');
    // res.send(`
    //     <form action="/product" method="POST">
    //         <input type="text" name="title"/>
    //         <button type="submit">Add Product</button>
    //     </form>
    // `)

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

router.post('/product', (req, res, next) => {
    console.log('Body', req.body);
    res.redirect('/shop')
})

module.exports = router;