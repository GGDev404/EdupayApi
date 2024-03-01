import {Router} from 'express'

import {
    GetGradeById,
    DeleteGrades,
    EditGrades,
    CreateGrades,
    getAllGradres
} from '../Controllers/GradesController.js'

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger-output.json' assert{ type: 'json'};

const router = Router();
router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

router.get("/Grades", getAllGradres)
router.get("/Grades/:id", GetGradeById)
router.post("/Grades", CreateGrades)
router.put("/graods/:id", EditGrades)
router.delete("/Grades/:id", DeleteGrades)

export default router