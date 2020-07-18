/*
I. Dependecies:
    A. 'Employee' Class
II. 'Engineer' Class extension
    A. super - constructor
        1. officeNumber, manager's phone number
    B. methods:
        1. getRole(), returns employee's role
        2. getOfficeNumber(), returns officeNumber 
*/
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email, officeNumber) 
{       super(name, id, email)
        this.officeNumber = officeNumber; 
}

getRole() { return 'Manager'}
getOfficeNumber() { return this.officeNumber}

}

module.exports = Manager;
