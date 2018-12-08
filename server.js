const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

app.get('/index' , (req,res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const port = 3000;
app.listen(port, function () {
    console.log('server started :' , port);
});