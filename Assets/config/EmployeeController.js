const express = require('express');
const router = express.Router ();
const employe = require('../models/employee.js');

router.get('/api/employee', (req, res) =>{
  employee.selectAll()
  .then(results => res.json(results)
  .catch(err => res.json(err))
});

router.post('/api/', (req, res) => {
    cat.create([])
})