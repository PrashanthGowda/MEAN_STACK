const router = require('express').Router();

const employeeservices = require('../services/employee')

router.get('/', employeeservices.get_employees);
router.get('/:employee_id', employeeservices.get_particular_employee);

module.exports = router;