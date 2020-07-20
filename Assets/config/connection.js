var mysql = require('mysql') ;
var util = require('util')
const connection = mysql.createConnection({
    host: 'localhost',

port: 3306,
user: 'root',
password: "",
database: "Employees_db"
});

connection.connect(function(err) {
    if(err){
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("conneected as id" + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;