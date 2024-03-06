import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { encrypt, compare } from '../helpper/handleBcryps.js';

const prisma = new PrismaClient();

const DeleteTableUsers = async (req, res) => {
    try {
        const Users = await prisma.users.deleteMany({});
        return res.json(Users);
    } catch (error) {
        console.error("Error al obtener Users:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
const GetParents = async (req, res) => {
    try {
        const Users = await prisma.users.findMany({
            where: {
                Rol: "FATHER"
            },
            include: {
                TutorOf: true,
            },

        });

        return res.json(Users);
    } catch (error) {
        console.error("Error al obtener Users:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const GetUsers = async (req, res) => {
    try {
        const Users = await prisma.Users.findMany({});

        return res.json(Users);
    } catch (error) {
        console.error("Error al obtener Users:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const CreateUsers = async (req, res) => {
    try {
        const ContraseñaHasheada = await encrypt(req.body.Password)
        req.body.Password = ContraseñaHasheada
        let Profile_Photo = req.imageUrl;

        const data = {
            Name : req.body.Name,
            Last_Name : req.body.Last_Name,
            Firs_Name : req.body.Firs_Name,
            Email : req.body.Email,
            Password : req.body.Password,
            Profile_Photo : Profile_Photo,
            Role : req.body.Role,
        };

        if (req.body.Id_Group) {
            data.Id_Group = parseInt(req.body.Id_Group);
        }

        if (req.body.Id_tutor) {
            data.Id_tutor = parseInt(req.body.Id_tutor);
        }

        const NewUser = await prisma.Users.create({ data });

        if (!NewUser) {
            return res.status(404).json({ error: "No se pudo crear el User" })
        }
        return res.json(NewUser)
    } 
    catch (error) {
        console.error("Error al crear User:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const getAllChildrens = async (req, res) => {
    try {
        const Childrens = await prisma.Users.findMany({
            where: {
                Rol: "CHILDREN"
            }
        });
        if (!Childrens) {
            return res.status(404).json({ error: "No se encontraron hijos" })
        }
        return res.json(Childrens)
    } catch (error) {
        console.error("Error al obtener hijos:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

const GetUserById = async (req, res) => {
    const User = await prisma.Users.findFirst({
        where: {
            Id: parseInt(req.user.Id)
        }
    });
    if (!User) {
        return res.status(404).json({ error: "User no encontrado" })
    }
    return res.json(User)
}
const uptadeImage = async (req, res) => {
    try {
        let Profile_Photo = (req.file && req.file.path) ? req.file.path : null;
        const User = await prisma.users.update({
            where: {
                Id: parseInt(req.params.id)
            },
            data: {
                Profile_Photo: Profile_Photo
            }
        });
        if (!User) {
            return res.status(404).json({ error: "User no encontrado" })
        }
        return res.json(User)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Algo salió mal' });
    
}
}

const EditUser = async (req, res) => {
    try {
        if (!req.body.Password) {
            console.log(req.body);
            return res.status(400).send('Password is required');
        }
        
        const ContraseñaHasheada = await encrypt(req.body.Password);
        req.body.Password = ContraseñaHasheada;
        let UserEditado = await prisma.users.findUnique({
            where: {
                Id: parseInt(req.params.id)
            },
        })
        if (!UserEditado) {
            return res.status(404).json({ error: "User no encontrado" })
        }
        UserEditado = await prisma.users.update({
            where: {
                Id: parseInt(req.params.id)
            },
            data: {
                Name : req.body.Name,
                Last_Name : req.body.Last_Name,
                Firs_Name : req.body.Firs_Name,
                Email : req.body.Email,
                Password : req.body.Password,
                Id_Group : parseInt(req.body.Id_Group),
                Rol : req.body.Rol,
                Id_tutor : parseInt(req.body.Id_tutor)
            }
        });
        return res.json(UserEditado)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Algo salió mal' });
    }
}

const DeleteUser = async (req, res) => {
    const UserEliminado = await prisma.Users.delete({
        where: {
            Id: parseInt(req.params.id)
        }
    })
    if (!UserEliminado) {
        return res.status(404).json({ error: "Error al eliminar User" })
    }
    return res.json('User Eliminado')
}
const GetChilds = async (req, res) => {
    const User = await prisma.users.findUnique({
        where: {
            Id: parseInt(req.params.id)
        },
        include: { TutorOf: true }
    })

    if (!User) {
        return res.status(404).json({ error: "User no encontrado" })
    }
    else {
        const hijos = User.TutorOf;
        return res.json(hijos)
    }
}

export {
    GetParents,
    GetUserById,
    EditUser,
    DeleteUser,
    CreateUsers,
    GetChilds,
    GetUsers,
    uptadeImage,
    DeleteTableUsers,
    getAllChildrens
}
