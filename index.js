const inquirer = require('inquirer');
const connection = require("./db/connection");

// function init() {
//     inquiryPrompts();

// };

function inquiryPrompts() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'initialPrompts',
            message: 'What would you like to do?',
            choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add an employee",
                "Add a department",
                "Add a role",
                "Update employee role"]
        },
    ])
        .then(function (response) {
            switch (response.initialPrompts) {
                case "View all employees":
                    return viewAllEmployees();
                    break;
                case "View all departments":
                    return viewAllDepartments();
                    break;
                case "View all roles":
                    return viewAllRoles();
                    break;
                case "Add an employee":
                    return addAnEmployee();
                    break;
                case "Add a department":
                    return addADepartment();
                    break;
                case "Add a role":
                    return addARole();
                    break;
                default: connection.end();
            }
        })
};

// Add departments, empRoles, employees

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.log(data)
        console.table(data);
        inquiryPrompts();
    })
}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        inquiryPrompts();
    })
}

function viewAllRoles() {
    connection.query("SELECT * FROM roles", function (err, data) {
        console.table(data);
        inquiryPrompts();
    })
}

async function addADepartment() {
    const department = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "What department would yo like to add?",
    })
    const result = await connection.query("INSERT INTO department SET ?", department);
    console.table(result)
    inquiryPrompts()
};

async function addARole() {
    const departments = await connection.query("SELECT * FROM department")
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }))
    const role = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What type of role would you like to add?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: departmentChoices
        },
    ])
    const result = await connection.query("INSERT INTO role SET ?", role)
    console.table(result)
    inquiryPrompts()
}

async function addAnEmployee() {
    const departments = await connection.query("SELECT * FROM department")
    console.log(departments)
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }))
    const roles = await connection.query("SELECT * FROM role")
    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id,
    }))
    const employee = await inquirer.prompt([
        {
            type: "list",
            name: "role_id",
            message: "What type of employee are we adding?",
            choices: roleChoices
        },
        {
            type: "input",
            name: "first_name",
            message: "What is their first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is their last name?",
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does the employee belong to?",
            choices: departmentChoices
        },
    ])
    const result = await connection.query("INSERT INTO employee SET ?", employee)
    console.table(result)
    inquiryPrompts()
};


//     // insert the item into our database
// const result = await connection.query("INSERT INTO employee SET ?", {
//     item_name,
//     category: item_category,
//     starting_bid: item_price,
//     highest_bid: item_price,
//   });

//   console.log("Item inserted successfully!");
// } catch (err) {
//   console.log("Whoopsy!");
// }
// inquiryPrompts();


// function addADepartment() {
//     inquirer.prompt({
//         type: "list",
//         name: "type",
//         message: "What type of employee are we adding?",
//         choices: ["Management", "Engineering", "Accounting"]

//     })


// }

// function addAempRole() {
//     inquirer.prompt({
//         type: "list",
//         name: "type",
//         message: "What type of employee are we adding?",
//         choices: ["Manager", "Engineer", "Accountant"]

//     })


// }

// View departments, empRoles, employees

// Update employee empRoles

// console.log("Listening on port " + PORT);

inquiryPrompts()