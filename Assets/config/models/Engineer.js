/*
I.   Dependencies
        A.' Employee.js '

II.  ' Engineer ' sub class of ' Employee'
        A. super - constructor 
            1. ' github ' , GitHub username of Engineer Employee
        B. Methods
            1. getRole(), return role of Employee
            2. getGithub(), return GitHub username of Employee 

*/   

const Employee = require('./Employee.js');

 class Engineer extends Employee
{
    constructor(name, id, email, github) 
    {
        super(name, id, email);
        this.github = github;
    }
    getRole ()  { return "Engineer"}
    getGithub() { return this.github}
}    
module.exports = Engineer;
    
