
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;


CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE empRole (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (deptartment_id) REFERENCES department (id),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30)NOT NULL,
  last_name VARCHAR(30)NOT NULL,
  role_id INT NOT NULL, 
  FOREIGN KEY (role_id) REFERENCES empRole (id),
  manger_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id), 
  PRIMARY KEY (id)
);


INSERT INTO employee (first_name, last_name, empRole)
VALUES ( "Ahmed", "Farage");

INSERT INTO employee (first_name, last_name, empRole)
VALUES ("Fatima", "Lorde");

INSERT INTO employee (first_name, last_name, empRole)
VALUES ("Jacob","Roston");

INSERT INTO employee (first_name, last_name, empRole)
VALUES ("Jessica","Miller");


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
SELECT * FROM empRole;