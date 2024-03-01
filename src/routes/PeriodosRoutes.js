import express from 'express';
const router =  express.Router();

// Import the PeriodosController
import PeriodosController from '../Controllers/PeriodosController.js';

// Define your routes
router.get('/periodos', PeriodosController.getAllperiod);
router.get('/periodos/:id', PeriodosController.getPeriodById);
router.post('/periodos/', PeriodosController.createPeriod);
router.put('/periodos/:id', PeriodosController.updatePeriod);
router.delete('/periodos/:id', PeriodosController.deletePeriod);

export default router;
