const orm = require('../orm.js');

class Employee {

    selectAll() {
        return orm.selectAll("Employee")
    }
    selectEmployee (){
        return orm.selectAll("employeeId")
    }
    
    createEmployee(columns, values) {
        return orm.create("Employee", columns, values)
    }
    createId(columns, values){
        return orm.create("id",columns, values )
    }
     }

module.exports = new Employee();