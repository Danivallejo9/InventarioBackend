const { Schema, model } = require('mongoose');

const inventarioSchema = Schema({
    serial: {
        type: String,
        requiered: true,
        unique: true,
    },
    modelo: {
        type: String,
        requiered: true,
    },
    descripcion: {
        type: String,
        requiered: true,
    },
    foto: {
        type: String,
        requiered: true,
    },
    color: {
        type: String,
        requiered: true,
    },
    fechaCompra: {
        type: Date,
        requiered: true,
    },
    precio: {
        type: Number,
        requiered: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        requiered: false,
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marcas',
        requiered: true,
    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        requiered: true,
    },
    estadoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        requiered: true,
    }
});

module.exports = model('Inventario', inventarioSchema ); 