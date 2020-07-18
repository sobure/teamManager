
// Dependencies
const express = require ('express');
var path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded( { extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./config/EmployeeController.js'));
app.use(require('./config/htmlController.js'))
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT} `)
} );