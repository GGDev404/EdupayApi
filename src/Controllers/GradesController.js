import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllGradres = async (req, res) => {
    try {
        const Grades = await prisma.grade.findMany()
        return res.json(Grades)
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const CreateGrades = async (req, res) => {
    try {
        await prisma.grade.update({
            data : {
                Name : req.body.Name,
                Id_Period : req.body.Id_Period
            }
        })
        return res.json("Grade creado con exito")
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const EditGrades = async (req,res ) => {
    try {
        await prisma.grade.update({
            where: {
                Id : parseInt(req.params.Id)
            },
            data : {
                Name : req.body.Name,
                Id_Period : req.body.Id_Period
            }
        })

        return res.json("Se edito correctamente")

    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const DeleteGrades = async (req,res) => {
    try {
        const id = parseInt(req.params.Id)
    await prisma.grade.delete({
        where : {
            Id :id
        }
    }
    
    )

    return res.json("User Eliminado")

    } catch (error) {
        console.log(error);
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

const GetGradeById = async (req,res) => {
    try {
        const id = parseInt(req.params.Id)
        const GradeFound = await prisma.grade.findUnique({
            where : {
                Id : id
            }
        })
        return res.json(GradeFound)
    } catch (error) {
        return res.status(500).json({error : "Error interno en el servidor"})
    }
}

export {
    GetGradeById,
    DeleteGrades,
    EditGrades,
    CreateGrades,
    getAllGradres
}