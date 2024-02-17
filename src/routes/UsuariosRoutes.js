import { Router } from "express";
import { obtenerPadres,crearUsuarios,obtenerUsuarioPorId,editaUsuario,eliminarUsuario, obtenerHijos, obtenerUsuarios} from '../Controllers/UsuariosController.js'; 
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger-output.json' assert{ type: 'json'};
import { assert } from "console";

const router = Router();

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Usuarios
router.get("/padres", obtenerPadres)
router.post("/usuarios",crearUsuarios);
router.get('/usuarios/:id', obtenerUsuarioPorId)
router.put('/usuarios/:id',editaUsuario)
router.delete('/usuarios/:id',eliminarUsuario)
router.get("/hijos/:id", obtenerHijos)
router.get("/usuarios", obtenerUsuarios)


export default router;