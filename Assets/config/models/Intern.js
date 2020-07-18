/*
I. Dependecies:
    A. ' Employee ' Class
II. ' Engineering ' Class extension:
    A. super - constructor
        1. ' school ', school of Intern
    B. methods ()
        1. getRole(), returns Employee type 
        getSchool(), returns school of Employee

*/ 

const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name,id,email, school) 
{       super(name, id, email)
        this.school = school;
}

getRole() { return 'Intern'}
getSchool() {return this.school}
}
module.exports = Intern 