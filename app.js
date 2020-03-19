const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => { res.send('Hello world!') });

app.use('/', require('./routes/routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = { app }