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
                IdPeriodo : req.body.IdPeriodo
            }
        })
        return res.json("Grado creado con exito")
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
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
                IdPeriodo : req.body.IdPeriodo
            }
        })

        return res.json("Se edito correctamente")

    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const eliminarGrados = async (req,res) => {
    try {
        const id = parseInt(req.params.Id)
    await prisma.grados.delete({
        where : {
            Id :id
        }
    }
    
    )

    return res.json("Usuario Eliminado")

    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const obtenerGradoPorId = async (req,res) => {
    try {
        const id = parseInt(req.params.Id)
        const gradoEncontrado = await prisma.grados.findUnique({
            where : {
                Id : id
            }
        })
        return res.json(gradoEncontrado)
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

export {
    obtenerGradoPorId,
    eliminarGrados,
    editarGrados,
    crearGrados,
    obtenerTodosLosGrados
}