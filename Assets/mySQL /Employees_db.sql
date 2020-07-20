DROP DATABASE IF EXISTS Employees_db;
-- Creates the "animals_db" database --
CREATE DATABASE Employees_db;

-- Makes it so all of the following code will affect animals_db --
USE Employees_db;

-- Creates the table "people" within animals_db --
CREATE TABLE employees (
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
    postion VARCHAR(30) NOT NULL,
    salary INTEGER(30) NOT NULL,
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id));

-- Creates new rows containing data in all named columns --
INSERT INTO employees (name, postion, salary, id)
VALUES ("Ahmed","Engineer", 100, 1);

INSERT INTO employees (name, postion, salary, id)
VALUES ("Ahmed","Engineer", 100, 1);

INSERT INTO employees (name, postion, salary, id)
VALUES ("Ahmed","Engineer", 100, 1);

INSERT INTO employees (name, postion, salary, id)
VALUES ("Ahmed","Engineer", 100, 1);

-- Updates the row where the column name is peter --

