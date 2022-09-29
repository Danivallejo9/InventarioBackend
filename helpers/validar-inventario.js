const validarInventario = (req) => {
    const validaciones = [];

    if (!req.body.serial) {
        validaciones.push('Serial requerido');
    }

    if (!req.body.modelo) {
        validaciones.push('Modelo requerido');
    }

    if (!req.body.descripcion) {
        validaciones.push('Descripción requerido');
    }

    if (!req.body.foto) {
        validaciones.push('Foto requerido');
    }

    if (!req.body.color) {
        validaciones.push('Color requerido');
    }

    if (!req.body.fechaCompra) {
        validaciones.push('Fecha de compra requerida');
    }

    if (!req.body.precio) {
        validaciones.push('Precio requerido');
    }

    if (!req.body.usuario) {
        validaciones.push('Usuario requerido');
    }

    if (!req.body.marca) {
        validaciones.push('Marca requerida');
    }

    if (!req.body.tipoEquipo) {
        validaciones.push('Tipo de equipo requerido');
    }

    if (!req.body.estadoEquipo) {
        validaciones.push('Estado de requerido');
    }

    return validaciones;
}

module.exports = {
    validarInventario,
}