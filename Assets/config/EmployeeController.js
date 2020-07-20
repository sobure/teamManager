const express = require('express');
const router = express.Router ();
const Employee = require('./models/Employee.js');
const sql = require('mysql')



router.get('/api/employees', (req, res) => {
  Employee.selectAllemployee()
  .then(results => res.json(results))
  .catch(err => res.json(err))
});
router.post("/api/employees:id",(req, res) => {
  const employeeId = req.params.employeeId
  
})

router.post('/api/', (req, res) => {
    Employee.create(["firstName","lastName","role", "salary"], [req.body.firstName, req.body.lastName,req.body.role,req.body.salary])
})

module.exports  = router

