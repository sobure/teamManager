const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/Manager/Engineers', (req, res) => {
  res.sendFile(path.join(__dirname, '../config/templates/engineer.html'))
});

router.get('/Manager/Intern', (req, res) => {
  res.sendFile(path.join(__dirname, '../config/templates/intern.html'))
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../config/templates/manager.html'))
});

module.exports = router;