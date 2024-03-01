import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

 export const GetAllgroups = async (req, res) => {
    try {
        const groups = await prisma.groups.findMany()
        return res.json(groups)
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

 export const CreateGroup = async (req, res) => {
    try {
        await prisma.groups.update({
            data : {
                Name : req.body.Name,
                Id_Grade : parseInt(req.body.Id_Grade),
                Quota : parseInt(req.body.Quota)
            }
        })
        return res.json("Grade creado con exito")
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

export const EdtiGroups = async (req,res ) => {
    try {
        await prisma.groups.update({
            where: {
                Id : parseInt(req.params.Id)
            },
            data : {
                Name : req.body.Name,
                Id_Grade : parseInt(req.body.Id_Grade),
                Quota : parseInt(req.body.Quota)
            }
        })

        return res.json("Se edito correctamente")

    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

export const DeleteGroup = async (req,res) => {
    try {
        const id = parseInt(req.params.Id)
    await prisma.groups.delete({
        where : {
            Id :id
        }
    }
    
    )

    return res.json("Group Eliminado")

    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

export  const GetGradeById = async (req,res) => {
    try {
        const id = parseInt(req.params.Id)
        const GradeFound = await prisma.groups.findUnique({
            where : {
                Id : id
            }
        })
        return res.json(GradeFound)
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}