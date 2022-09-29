const express = require('express');
const {getConnection} = require('./db/db-connection-mongo');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors()); 

getConnection();

app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/tipoEquipo', require('./router/tipoEquipo'));
app.use('/estadoEquipo', require('./router/estadoEquipo'));
app.use('/marcas', require('./router/marcas'));
app.use('/inventario', require('./router/inventario'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})