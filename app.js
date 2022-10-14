
const express = require('express');

const app = express();

// Configuración del encoded y formato JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//ruta de ejemplo
app.get('/', (pet, res) => {
    res.send('<h1> PROYECTO EN BLANCO </h1>')
});

// servidor corriendo en puerto 3000
app.listen(5000, (pet, res) => {
    console.log('SERVIDOR CORRIENDO');
});