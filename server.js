'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: true});

app.use(express.static('./public'));

app.listen(PORT, function(){
    console.log(`listening on the port: ${PORT}`);
});

app.get('/', (request, response) => response.sendFile('index.html', {root: '.'}));

// app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));