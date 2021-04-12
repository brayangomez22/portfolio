require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.CLI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));
