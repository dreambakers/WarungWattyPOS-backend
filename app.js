const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'x-auth,x-filesize,Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'x-auth,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => { res.send('Hello world!') });

app.use('/', require('./routes/routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = { app }