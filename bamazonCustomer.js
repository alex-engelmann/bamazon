var mysql = require("mysql");
var inquirer = require("inquirer");

var Table = require('easy-table');

var dotenv = require("dotenv").config();
var keys = require("./keys");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: keys.login.user,
    password: keys.login.pass,
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;

    displayAllProducts();
});

let displayAllProducts = function () {

    //select all the products and display them in a table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        let t = new Table;

        res.forEach(function (product) {
            t.cell('Product Id', product.item_id)
            t.cell('Product Name', product.product_name)
            t.cell('Department Name', product.department_name)
            t.cell('Price', product.price, Table.number(2))
            t.cell('Quantity in stock', product.stock_quantity)
            t.newRow()
        })
        console.log(t.toString())
        queryUser();
        
    })
}


//gets the information from the user
function queryUser() {
    inquirer
        .prompt([
            {
                name: "getID",
                type: "input",
                message: "Enter the ID of the item you'd like to purchase",
            },
            {
                name: "getQuantity",
                type: "input",
                message: "Enter the quantity you'd like"
            }]
        )
        .then(function (answers) {
                connection.query("SELECT * FROM products WHERE item_id = ?", VALUES = answers.getID, function (err, res) {
                    if (err) {
                        console.log("Something went wrong");
                        throw err;
                    }
                    //check for insufficient stock
                    if (res[0].stock_quantity - answers.getQuantity < 0) {
                        console.log("Insufficient inventory!");
                        connection.end();
                    }
                    //update the inventory and give the customer a price
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                { stock_quantity: res[0].stock_quantity - answers.getQuantity },
                                { item_id: answers.getID }
                            ]
                        )

                        console.log("Your total today is $ "
                            + answers.getQuantity * res[0].price + ". \n Thanks for shopping at Bamazon ");
                        connection.end();
                    };
                })})}
            