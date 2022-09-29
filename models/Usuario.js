const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requiered: true,
        unique: true,
    },
    estado: {
        type: String,
        requiered: true,
        enum: [
            'Activo',
            'Inactivo',
        ]
    },
    fechaCreacion: {
        type: Date,
        requiered: true,
    },
    fechaActualizacion:{
        type: Date,
        requiered: true,
    } 
});

module.exports = model('Usuario', UsuarioSchema);
