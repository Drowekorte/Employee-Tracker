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

const util = require("util");

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

});

connection.query = util.promisify(connection.query);

module.exports = connection