import {Router} from 'express'
import {getPersona,createNewPersona,getPersonaById,deletepersona, updatePersonaById} from '../controllers/Persona.Controller'


const router =Router()
router.get('/persona/obtener', getPersona);
router.post('/persona/crear',createNewPersona);
router.get('/persona/obtener/:id', getPersonaById);
router.delete('/persona/eliminar/:id', deletepersona);
router.put('/persona/actualizar/:id', updatePersonaById);


export default router

