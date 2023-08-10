const express = require('express');
const router = express.Router();
import {getProductById} from '../controllers/products.controller'
import {mostrarInicio} from '../controllers/inicio.Controller'

// Definir rutas
router.get('/hola', mostrarInicio);

module.exports = router;