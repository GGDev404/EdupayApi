import { Router } from "express";
import { obtenerUsuarios,crearUsuarios,obtenerUsuarioPorId,editaUsuario,eliminarUsuario} from '../Controllers/UsuariosController.js'; 
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './../../swagger_output.json' assert{ type: 'json'};
import { assert } from "console";

const router = Router();

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Usuarios
router.get("/usuarios", obtenerUsuarios)
router.post("/usuarios",crearUsuarios);
router.get('/usuarios/:id', obtenerUsuarioPorId)
router.put('/usuarios/:id',editaUsuario)
router.delete('/usuarios/:id',eliminarUsuario)


export default router;