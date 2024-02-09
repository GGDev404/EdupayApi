import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { encrypt, compare } from '../helpper/handleBcryps.js';
const router = Router();
const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
    const { CorreoElectronico, Contrasena } = req.body;

    try {
        const usuario = await prisma.usuarios.findFirst({
            where: {
                CorreoElectronico: CorreoElectronico
            }
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const contrasenaVerificada = await compare(Contrasena, usuario.Contrasena);

        if (contrasenaVerificada) {
            return res.json({ userId: usuario.Id });
        } else {
            return res.status(404).json({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error('Error en la autenticación:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});


export default router;