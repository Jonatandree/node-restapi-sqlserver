import {Router} from 'express'
import {getProducts} from '../controllers/products.controller'
import {createNewProducts} from '../controllers/products.controller';
import {eliminateProducts } from '../controllers/products.controller';
import {updateProducts} from '../controllers/products.controller';
import {Products} from '../controllers/products.controller';

const router =Router()

router.get('/producto/obtener', getProducts);

router.post('/producto/crear',createNewProducts);

router.delete('/producto/eliminar', eliminateProducts);

router.put('/producto/actualizar', updateProducts);

router.get('/on', Products);



export default router