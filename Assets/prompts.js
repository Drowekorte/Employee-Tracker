const inquirer = require("inquirer");
const connection = require("..");

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

module.exports = { inquiryPrompts, rolePrompts, departmentPrompts }