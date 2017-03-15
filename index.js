require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server listening on port', PORT));

app.use(logger('dev'));

app.use(require('./resources'));

module.exports = app;
