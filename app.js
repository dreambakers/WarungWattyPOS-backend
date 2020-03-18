const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();
app.use(cors({origin:true,credentials: true})); // allow cors headers
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => { res.send('Hello world!') });

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = { app }