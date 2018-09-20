const mysqlConnection = require('../db-conn');

exports.get_employees = function (req, res) {
    mysqlConnection.query('SELECT * FROM employee_details', function (error, response) {
        if (error) throw error;
        return res.send({ data: response });
    });
}

exports.get_particular_employee = function (req, res) {
    let emp_id = req.params.employee_id;
    if (emp_id) {
        mysqlConnection.query('Select * from employee_details where employee_id=?', emp_id, (error, response)=>{
            if (error) throw error;
            return res.send({employee: response})
        })
    } else {
        res.status(400).send({error: true, message: 'please provide employee id'})
    }
}