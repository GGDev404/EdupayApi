import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { encrypt, compare } from '../helpper/handleBcryps.js';
const prisma = new PrismaClient();

const obtenerPadres = async (req, res) => {
    try {
        const usuarios = await prisma.usuarios.findMany({
            where : {
                Rol : "Padre"
            },
            include: {
                TutorDe: true,
            },
           
        });

        return res.json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const crearUsuarios = async (req,res) =>{
    
    const ContraseñaHasheada = await encrypt(req.body.Contrasena)
    req.body.Contrasena = ContraseñaHasheada
    const nuevoUsuario = await prisma.usuarios.create(
        {
            data : req.body
          }
    );
    if (!nuevoUsuario) {
        return res.status(404).json({error : "No se pudo crear el usuario"})
    }
    return res.json(nuevoUsuario)
}

const obtenerUsuarioPorId = async (req,res) =>{
    const usuario = await prisma.usuarios.findFirst({
        where : {
            Id : parseInt(req.params.id)
        },
        include : {
            periodos:true,
            grados : true,
            grupos : true,
        }
    });
    if (!usuario) {
        return res.status(404).json({error : "Usuario no encontrado"})
    }
    return res.json(usuario)
}

const editaUsuario = async (req, res) => {
    const {Contrasena} = req.body
    const ContraseñaHasheada = await encrypt(Contrasena)
    req.body.Contrasena = ContraseñaHasheada
    const usuarioEditado = await prisma.usuarios.findUnique({
        where : {
            Id : parseInt(req.params.id)
        },
    })
    if (!usuarioEditado) {
        return res.status(404).json({error : "Usuario no encontrado"})
    }
      await prisma.usuarios.update({
        where: {
          Id: parseInt(req.params.id)
        },
        data: req.body
      });
    return res.json(usuarioEditado)
} 

const eliminarUsuario = async (req,res) =>{
    const usuarioEliminado = await prisma.usuarios.delete({
        where:{
            Id: parseInt(req.params.id)
        }
    })
    if (!usuarioEliminado) {
        return res.status(404).json({error : "Error al eliminar usuario"})
    }
    return res.json('Usuario Eliminado')
}
const obtenerHijos = async (req,res) => {
    const usuario = await prisma.usuarios.findUnique({
        where : {
            Id : parseInt(req.params.id)
        },
        include :  {TutorDe : true}
    })

    if (!usuario) {
        return res.status(404).json({ error : "Usuario no encontrado"})
    }
    else{
        const hijos = usuario.TutorDe;
        return res.json(hijos)
    }
}

export {
    obtenerPadres,
    obtenerUsuarioPorId,
    editaUsuario,
    eliminarUsuario,
    crearUsuarios,
    obtenerHijos
}
