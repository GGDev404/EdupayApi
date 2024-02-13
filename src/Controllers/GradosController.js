import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const obtenerTodosLosGrados = async (req, res) => {
    try {
        const grados = await prisma.grados.findMany()
        return res.json(grados)
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const crearGrados = async (req, res) => {
    try {
        await prisma.grados.update({
            data : {
                Nombre : req.body.Nombre,
                Id : req.body.IdPeriodo
            }
        })
    } catch (error) {
        
    }
}

const editarGrados = async (req,res ) => {
    try {
        await prisma.grados.update({
            where: {
                Id : parseInt(req.params.Id)
            },
            data : {
                Nombre : req.body.Nombre,
                Id : req.body.IdPeriodo
            }
        })
    } catch (error) {
        
    }
}