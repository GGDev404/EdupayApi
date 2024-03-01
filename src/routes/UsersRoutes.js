import { Router } from "express";
import { GetParents, getAllChildrens, DeleteTableUsers,CreateUsers,GetUserById,EditUser,DeleteUser, GetChilds, GetUsers, uptadeImage} from '../Controllers/UsersController.js'; 
import swaggerUi from 'swagger-ui-express';
import uploadMiddleware from "../middleware/upload.js";
import authMiddleware from '../middleware/auth.js';
import swaggerFile from '../swagger-output.json' assert{ type: 'json'};
import fakerExtraActivity from '../helpper/faker.js';
import { assert } from "console";

const router = Router();

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Users
router.get("/Fathers", GetParents)
router.post("/Users",uploadMiddleware, CreateUsers)
router.get('/UsersId/',authMiddleware, GetUserById)
router.put('/Users/:id',EditUser)
router.delete('/Users/:id',DeleteUser)
router.get("/Childrens/:id", GetChilds)
router.get("/Users", GetUsers)  
router.put('/UsersImage/:id',uploadMiddleware,uptadeImage )
router.get('/faker', fakerExtraActivity)
router.delete('/deleteTableUsers', DeleteTableUsers)
router.get('/AllChildrens', getAllChildrens)


export default router;