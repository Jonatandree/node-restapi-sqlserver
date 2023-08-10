import {Router} from 'express'
import {getProductById, getProducts} from '../controllers/products.controller'
import {createNewProducts} from '../controllers/products.controller';
import {deleteProduct } from '../controllers/products.controller';
import {updateProductsById} from '../controllers/products.controller';
import {Products} from '../controllers/products.controller';

const router =Router()
router.get('/producto/obtener', getProducts);

router.post('/producto/crear',createNewProducts);

router.get('/producto/obtener/:id', getProductById);

router.delete('/producto/eliminar/:id', deleteProduct);

router.put('/producto/actualizar/:id', updateProductsById);



export default router