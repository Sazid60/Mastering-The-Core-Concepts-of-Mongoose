import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// This will take the router request from client and hit the controller
router.post('/create-student', StudentController.createStudent);

export const StudentRoutes = router;
