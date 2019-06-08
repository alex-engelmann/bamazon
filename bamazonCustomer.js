var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "penbed29",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user

    start();
});

// function which prompts the user for what action they should take
function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
    })
    inquirer
        .prompt({
            name: "productlist",
            type: "list",
            message: "Would you like to [BUY] or [EXIT]",
            choices: ["BUY", "EXIT"]
        })
        .then(function (answer) {
            // based on their answer, either call the buy or exit functions
            if (answer.productlist === "BUY") {
                console.log("You wanted to buy something!");
                connection.end();
            }
            else if (answer.productlist === "EXIT") {
                connection.end();
            }
        });
}