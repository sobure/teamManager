DROP DATABASE IF EXISTS Employees_db;
-- Creates the "animals_db" database --
CREATE DATABASE Employees_db;

-- Makes it so all of the following code will affect animals_db --
USE Employees_db;

-- Creates the table "people" within animals_db --
CREATE TABLE employees (
  -- Makes a string column called "name" which cannot contain null --
  INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
    postion VARCHAR(30) NOT NULL,
    role_id INTEGER(30) NOT NULL,
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    manager_id
    PRIMARY KEY (id));

-- Creates new rows containing data in all named columns --
INSERT INTO employees (name, postion, salary, id)
VALUES ("Solomon Obure","Engineer", 100, 1);

INSERT INTO employees (name, postion, salary, id)
VALUES ("Manager #1","Manager", 100, 2);

INSERT INTO employees (name, postion, salary, id)
VALUES ("Ahmed","Intern", 100, 3);


-

