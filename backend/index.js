const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const route = require('./route/router');
const app = express();


app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

require('./config/database');
app.use('/', route);

app.set('port', process.env.PORT || 7006);

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});

