const { Router } = require('express');
const router =  Router();
const TipoEquipo = require('../models/TipoEquipo');
const { validarTipoEquipo } = require('../helpers/validar-tipoEquipo');

router.post('/', async function(req, res){
   
try{

    const validaciones = validarTipoEquipo(req);
       
       if (validaciones.length > 0){
            return res.status(400).send(validaciones);
       }

    let tipoEquipo = new TipoEquipo();
    tipoEquipo.nombre = req.body.nombre;
    tipoEquipo.estado = req.body.estado;
    tipoEquipo.fechaCreacion = new Date();
    tipoEquipo.fechaActualizacion = new Date();

    tipoEquipo = await tipoEquipo.save();

    res.send(tipoEquipo);

}catch (error){
    console.log(error);
    res.status(500).send('ocurrió un error')
}




});

router.get('/', async function(req, res){
    try {
        const tipoEquipo = await TipoEquipo.find();
        res.send(tipoEquipo);
    } catch(error){
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});

router.put('/:tipoEquipoId', async function(req, res){
    
    try{
        const validaciones = validarTipoEquipo(req);
       
       if (validaciones.length > 0){
            return res.status(400).send(validaciones);
       }

        let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);
        if (!tipoEquipo) {
            return res.status(400).send('Tipo equipo no existe');
        }
            tipoEquipo.nombre = req.body.nombre;
            tipoEquipo.estado = req.body.estado;
            tipoEquipo.fechaActualizacion = new Date();
            tipoEquipo = await tipoEquipo.save();
            res.send(tipoEquipo);
    
    }catch (error){
        console.log(error);
        res.status(500).send('ocurrió un error')
    }
    
    });

module.exports = router;