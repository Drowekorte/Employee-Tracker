DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);



CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

-- Department Inserts
INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Accounting");


-- Employee Inserts
INSERT INTO employee (first_name, last_name, role_id)
VALUES ( "Ahmed", "Farage", 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Fatima", "Lorde", 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jacob","Roston", 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jessica","Miller", 3);


-- Role Inserts
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 200000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 150000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 150000.00, 3);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;