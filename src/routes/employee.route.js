const express = require("express");

const router = express.Router();
const EmployeeController = require('../controllers/employee.controller');
router.get('/', EmployeeController.getEmployeeList);
router.get('/:id', EmployeeController.getEmployeeByID);
router.post('/', EmployeeController.CreateEmployees)
router.put('/:id', EmployeeController.UpdateEmployees)
router.delete('/:id',EmployeeController.DeleteEmployee)
module.exports = router;