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
    Employee.create(["fname","lname","tite","salary","departement_id"], [req.body.fname, req.body.lname,req.body.salary,req.body.department_id])
})

module.exports  = router

