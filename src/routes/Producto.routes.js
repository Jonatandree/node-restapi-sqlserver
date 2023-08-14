import {Router} from 'express'
import {getProductById, getproducto} from '../controllers/Producto.Controller'
import {createNewproducto} from '../controllers/Producto.Controller';
import {deleteProduct } from '../controllers/Producto.Controller';
import {updateproductoById} from '../controllers/Producto.Controller';


const router =Router()
router.get('/producto/obtener', getproducto);

router.post('/producto/crear',createNewproducto);

router.get('/producto/obtener/:id', getProductoById);

router.delete('/producto/eliminar/:id', deleteProducto);

router.put('/producto/actualizar/:id', updateproductoById);



export default router