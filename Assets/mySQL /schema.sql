DROP DATABASE IF EXISTS Employees;
CREATE DATABASE Employees;

-- tells mysql that we are going to start interacting with library_db
USE Employees;

CREATE TABLE Employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  position VARCHAR(255) NOT NULL,
 
  PRIMARY KEY (Employees.id)
);


INSERT INTO Employees (firstName, lastName) VALUES ('J. K.', 'Rowling');
INSERT INTO roles (position) VALUES ('Manager');

