import express from 'express';
import { GetAllgroups, CreateGroup, EdtiGroups, DeleteGroup, GetGradeById } from '../Controllers/Grupos.Controller.js';

const router = express.Router();

router.get('/Group', GetAllgroups);
router.post('/Group', CreateGroup);
router.put('/Group:Id', EdtiGroups);
router.delete('/Group:Id', DeleteGroup);
router.get('/Group:Id', GetGradeById);

export default router;
