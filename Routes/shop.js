const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
   console.log('Root');
//    res.send("<h1>Welcome to Shopping Cart</h1>"); For sending HTML content

/*=========================
|
|   For sending HTML files using [path]
|   Syntax  res.sendFile(path.join(__dirname, 'absulut path', 'linking folder', 'File name'));
|
|=========================== */
   res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;