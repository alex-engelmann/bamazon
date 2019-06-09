# bamazon
CLI program for a mock inventory database

This Node app shows inventory in a table to the user, gets input, and then queries/updates a local MySQL inventory database. 

This is the table in a local server

<p align="center">
  <img alt="mysql table screenshot" src=https://github.com/alex-engelmann/bamazon/blob/master/screenshots/mysql-table.PNG>
</p>

The user sees a similar table in the CLI and enters a product ID and desired quantity, and gets back a price for their order.

<p align="center">
  <img alt="table screenshot" src=https://github.com/alex-engelmann/bamazon/blob/master/screenshots/cli-table.PNG>
</p>

Inventory is updated in the database as well:

<p align="center">
  <img alt="mysql inventory screenshot" src=https://github.com/alex-engelmann/bamazon/blob/master/screenshots/mysql-updated-table.PNG>
</p>

If there's insufficient inventory, the user is made aware and the order does not go through:

<p align="center">
  <img alt="insufficient inventory screenshot" src=https://github.com/alex-engelmann/bamazon/blob/master/screenshots/cli-insufficient-stock.PNG>
</p>

### Dependencies

This Node app requires the following NPM modules in order to function properly:

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   * [MySQL](https://www.npmjs.com/package/mysql)
   * [Inquirer](https://www.npmjs.com/package/inquirer)
   * [Easy table](https://www.npmjs.com/package/easy-table)
   
   Note that to run this locally, you will need to seed and provide login to your own MySQL database.
