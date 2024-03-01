import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
import jwt from "jsonwebtoken";
import { encrypt, compare } from '../helpper/handleBcryps.js';
const router = Router();
const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const User = await prisma.Users.findFirst({
            where: {
                Email: Email
            }
        });

        if (!User) {
            return res.status(404).json({ error: 'User no encontrado' });
        }

        const PasswordVerificada = await compare(Password, User.Password);

        if (PasswordVerificada) {
            const token = jwt.sign(User, process.env.secretJwt, {expiresIn: '1h'});
            return res.json({ token });
        } else {
            return res.status(404).json({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error('Error en la autenticación:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});


export default router;