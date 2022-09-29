const { Router } = require('express');
const router =  Router();
const Marcas = require('../models/Marcas');
const { validarMarcas } = require('../helpers/validar-marcas');

router.post('/', async function(req, res){
   
try{
    const validaciones = validarMarcas(req);
       
       if (validaciones.length > 0){
            return res.status(400).send(validaciones);
       }

    let marcas = new Marcas();
    marcas.nombre = req.body.nombre;
    marcas.estado = req.body.estado;
    marcas.fechaCreacion = new Date();
    marcas.fechaActualizacion = new Date();

    marcas = await marcas.save();

    res.send(marcas);

}catch (error){
    console.log(error);
    res.status(500).send('ocurrió un error')
}




});

router.get('/', async function(req, res){
    try {
        const marcas = await Marcas.find();
        res.send(marcas);
    } catch(error){
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});

router.put('/:marcasId', async function(req, res){
    
    try{
        const validaciones = validarMarcas(req);
       
       if (validaciones.length > 0){
            return res.status(400).send(validaciones);
       }

        let marcas = await Marcas.findById(req.params.marcasId);
        if (!marcas) {
            return res.status(400).send('Marca no existe');
        }
        marcas.nombre = req.body.nombre;
        marcas.estado = req.body.estado;
        marcas.fechaActualizacion = new Date();
        marcas = await marcas.save();
        res.send(marcas);
    
    }catch (error){
        console.log(error);
        res.status(500).send('ocurrió un error')
    }
    
    
    
    
    });

module.exports = router;