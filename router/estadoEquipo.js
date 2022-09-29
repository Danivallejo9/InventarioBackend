const { Router } = require('express');
const router =  Router();
const EstadoEquipo = require('../models/EstadoEquipo');
const { validarEstadoEquipo } = require('../helpers/validar-estadoEquipo');
router.post('/', async function(req, res){
   
try{

    const validaciones = validarEstadoEquipo(req);
       
       if (validaciones.length > 0){
            return res.status(400).send(validaciones);
       }

    let estadoEquipo = new EstadoEquipo();
    estadoEquipo.nombre = req.body.nombre;
    estadoEquipo.estado = req.body.estado;
    estadoEquipo.fechaCreacion = new Date();
    estadoEquipo.fechaActualizacion = new Date();

    estadoEquipo = await estadoEquipo.save();

    res.send(estadoEquipo);

}catch (error){
    console.log(error);
    res.status(500).send('ocurrió un error')
}




});

router.get('/', async function(req, res){
    try {
        const estadoEquipo = await EstadoEquipo.find();
        res.send(estadoEquipo);
    } catch(error){
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});

router.put('/:estadoEquipoId', async function(req, res){
    
    try{
        const validaciones = validarEstadoEquipo(req);
       
       if (validaciones.length > 0){
            return res.status(400).send(validaciones);
       }

        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if (!estadoEquipo) {
            return res.status(400).send('Estado equipo no existe');
        }
            estadoEquipo.nombre = req.body.nombre;
            estadoEquipo.estado = req.body.estado;
            estadoEquipo.fechaActualizacion = new Date();
            estadoEquipo = await estadoEquipo.save();

    res.send(estadoEquipo);
    
    }catch (error){
        console.log(error);
        res.status(500).send('ocurrió un error')
    }
    
    
    });

module.exports = router;