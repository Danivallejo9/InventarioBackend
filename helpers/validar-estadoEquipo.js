const validarEstadoEquipo = (req) => {
    const validaciones = [];

    if (!req.body.nombre) {
        validaciones.push('Nombre requerido');
    }

    if (!req.body.estado) {
        validaciones.push('Estado requerido');
    }

    if (!req.body.fechaCreacion) {
        validaciones.push('Fecha de creación requerida');
    }

   
    return validaciones;
}

module.exports = {
    validarEstadoEquipo,
}