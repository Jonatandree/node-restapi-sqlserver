import { Router } from 'express';
import {loginUser,
createNewUser,
  getUserById,
  deleteUser,
  updateUserById
} from '../controllers/Login.Controller';

const router = Router();
router.post('/login', loginUser);
router.post('/user/crear', createNewUser);
router.get('/user/obtener/:id', getUserById);
router.delete('/user/eliminar/:id', deleteUser);
router.put('/user/actualizar/:id', updateUserById);

export default router;
