const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',homeRoutes);

app.listen(port,()=>{
    console.log(`runnning at http://localhost:${port}`)
})