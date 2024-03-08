import e, { Router } from "express";
import { GetParents, getAllChildrens, DeleteTableUsers,CreateUsers,GetUserById,EditUser,DeleteUser, GetChilds, GetUsers, uptadeImage} from '../Controllers/UsersController.js'; 
import swaggerUi from 'swagger-ui-express';
import imageUploadController from "../middleware/upload.js";
import authMiddleware from '../middleware/auth.js';
import swaggerFile from '../swagger-output.json' assert{ type: 'json'};
import createFakeUsers from '../helpper/faker.js';
import multer from "multer";


const upload = multer({ dest: '../uploads/' })  

const router = Router();

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Users
router.get("/Fathers",authMiddleware, GetParents)
router.post("/Users" ,upload.single('image') ,imageUploadController, CreateUsers)
router.get('/UsersId/',authMiddleware, GetUserById)
router.put('/Users/:id',authMiddleware,EditUser)
router.delete('/Users/:id',authMiddleware,DeleteUser)
router.get("/Childrens/:id",authMiddleware, GetChilds)
router.get("/Users",authMiddleware, GetUsers)  
router.put('/UsersImage/:id',authMiddleware,upload.single('image') ,imageUploadController,uptadeImage )
router.get('/faker', createFakeUsers)
router.delete('/deleteTableUsers',authMiddleware, DeleteTableUsers)
router.get('/AllChildrens',authMiddleware, getAllChildrens)


export default router;