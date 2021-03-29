-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS employees_db;
-- Creates the "animals_db" database --
CREATE DATABASE employees_db;

-- Makes it so all of the following code will affect animals_db --
USE employees_db;

-- Creates the table "employee" within animals_db --
CREATE TABLE employee (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);
-- Creates the table "department" within animals_db --
CREATE TABLE department (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30),
  PRIMARY KEY (id)
);

-- Creates the table "employee role" within animals_db --
CREATE TABLE empl_role (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INTEGER(11),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO employee (id, first_name, last_name)
VALUES (12, "Ahmed", "Farage");

INSERT INTO employee (id, first_name, last_name)
VALUES (14, "Fatima", "Lorde");

INSERT INTO employee (id, first_name, last_name)
VALUES (16, "Jacob","Roston");

INSERT INTO employee (id, first_name, last_name)
VALUES (18, "Jessica","Miller");

-- Creates new rows containing data in all named columns --
INSERT INTO department (id, dept_name)
VALUES (22, "Management");

INSERT INTO department (id, dept_name)
VALUES (33, "Engineering");

INSERT INTO department (id, dept_name)
VALUES (44, "Accounting");


-- Creates new rows containing data in all named columns --
INSERT INTO empl_role (id, title, salary, department_id)
VALUES (22, "Manager", 200000.00, 222);

INSERT INTO empl_role (id, title, salary, department_id)
VALUES (33, "Engineering", 150000.00, 333);

INSERT INTO empl_role (id, title, salary, department_id)
VALUES (44, "Accountant", 150000.00, 444);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM empl_role;