const express = require('express');
const routerStudent = express.Router();
const studentController = require('../Controllers/Student.Controllers');

routerStudent.get('/AllExercices', studentController.getAllExercices);
routerStudent.get('/:id', studentController.getSingleExercice);

routerStudent.post('/create', studentController.createExercice);
routerStudent.put('/update/:id', studentController.updatetSingleExercice);
routerStudent.delete('/delete/:id', studentController.deleteSingleExercice);

module.exports = routerStudent;