const { Schema, model } = require('mongoose');

const habilidadSchema = Schema({
    titulo: {
        type: String, require: true
    },
    porcentaje: {
        type: Number, require: true
    },
    date: {
        type: Date, default: Date.now
    }
});

module.exports = model('Habilidad', habilidadSchema);