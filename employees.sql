
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id , 
  -- FOREIGN KEY (role_id) REFERENCES empRole (id),
  -- manger_id INT NOT NULL,
  -- FOREIGN KEY (manager_id) REFERENCES employee(id), 
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  -- department_id INT NOT NULL,
  -- FOREIGN KEY (deptartment_id) REFERENCES department (id),
  PRIMARY KEY (id)
);




INSERT INTO employee (first_name, last_name, role)
VALUES ( "Ahmed", "Farage", "Accountant");

INSERT INTO employee (first_name, last_name, role)
VALUES ("Fatima", "Lorde", "Engineering");

INSERT INTO employee (first_name, last_name, role)
VALUES ("Jacob","Roston", "Manager");

INSERT INTO employee (first_name, last_name, role)
VALUES ("Jessica","Miller", "Accountant");


INSERT INTO department (id, dept_name)
VALUES (22, "Management");

INSERT INTO department (id, dept_name)
VALUES (33, "Engineering");

INSERT INTO department (id, dept_name)
VALUES (44, "Accounting");



INSERT INTO role (id, title, salary, department_id)
VALUES (22, "Manager", 200000.00, 222);

INSERT INTO role (id, title, salary, department_id)
VALUES (33, "Engineering", 150000.00, 333);

INSERT INTO role (id, title, salary, department_id)
VALUES (44, "Accountant", 150000.00, 444);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;