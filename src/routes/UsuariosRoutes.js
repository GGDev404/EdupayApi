import { Router } from "express";
import {
    obtenerUsuarios,crearUsuarios,obtenerUsuarioPorId,editaUsuario,eliminarUsuario} from '../Controllers/UsuariosController.js'; 
const router = Router();
//Usuarios
router.get("/usuarios", obtenerUsuarios)
router.post("/usuarios",crearUsuarios);
router.get('/usuarios/:id', obtenerUsuarioPorId)
router.put('/usuarios/:id',editaUsuario)
router.delete('/usuarios/:id',eliminarUsuario)


export default router;