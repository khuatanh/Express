const express = require ('express');

const app= express();

const port= 3000;

app.get('/', (req, res) => res.send('I am Ngọc Anh'));

app.listen(port, ()=> console.log('server listening on port') + port);