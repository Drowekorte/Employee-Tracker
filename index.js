const inquirer = require('inquirer');
// const { inquiryPrompts, rolePrompts, departmentPrompts } = require("./Assets/prompts");



const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "employees_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    init();
});
// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);




function init() {
    inquiryPrompts();

};

function inquiryPrompts() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'initialInquiry',
            message: 'What would you like to do?',
            choices: ["View all employees", "View all departments", "View all roles"]
        },
    ])
    .then(function(inquiryAll){
        switch(inquiryAll.initialInquiry){
            case "View all employees":
                return viewAllEmployees();
                break;
            case "View all departments":
                return viewAllDepartments();
                break;
            case "View all roles":
                return viewAllRoles();
                break;    
                default: connection.end();
        }
    })
};

function rolePrompts() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'email',
            message: `What is their email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
        }
    ])
};

function departmentPrompts() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: `What is their email?`,
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?',
        }
    ])
}

// Add departments, roles, employees

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, data){
        console.table(data);
        init();
    })
}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, data){
        console.log(data)
        console.table(data);
        init();
    })
}

function viewAllRoles() {
    connection.query("SELECT * FROM empl_role", function (err, data){
        console.table(data);
        init();
    })
}

function addEmployee() {
    inquirer.prompt({
        type: "input",
        name: "firstName",
        message: "What is their first name?",
        

    },
    {
        type: "input",
        name: "lastName",
        message: "What is their last name?",

    },
    {
        type: "list",
        name: "type",
        message: "What type of employee are we adding?",
        choices: ["Management", "Engineering", "Accounting"]

    })
};

function addDepartment() {
    inquirer.prompt({
        type: "list",
        name: "type",
        message: "What type of employee are we adding?",
        choices: ["Management", "Engineering", "Accounting"]

    })


}

function addRole() {
    inquirer.prompt({
        type: "list",
        name: "type",
        message: "What type of employee are we adding?",
        choices: ["Manager", "Engineer", "Accountant"]

    })


}

// View departments, roles, employees

// Update employee roles

// console.log("Listening on port " + PORT);