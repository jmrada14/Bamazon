let mysql = require('mysql');
let inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "juan",

    // Your password
    password: "juan",
    database: "bamazonDB"
});

connection.connect();
askQuestions()
function askQuestions() {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            name: "managerAction",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then(function (ans) {
        switch (ans.manager) {
            case "Products for sale":
                viewProducts()
                break;
            case "View low inventory":
                lowInventory()
                break;
            case "Add product to inventory":
                addInventory()
                break;
            case "Add new products to db":
                addProduct()
                break;
            default:

                break;
        }
    });
}
function viewProducts () {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        // console.log(res);
        res.forEach(row => {
            console.log(`id: ${row.id} Name: ${row.product} Price: ${row.price} Quantity: ${row.stock_quantity}\n`)
        });
        connection.end()
    })
}
function lowInventory() {
    connection.query('SELECT * FROM products WHERE stock_quantity < 5', function (error, res) {
        if (error) throw error;
        console.log(res);
        res.forEach(row => {
            console.log(`Id: ${row.id} Name: ${row.product} Price: ${row.price} Quantity: ${row.stock_quantity}\n`)
        });
        connection.end()
    })
}
function addInventory(productId, prodQuantity) {
    connection.query('SELECT * FROM products', function (err, res) {
        console.log(err,res)
        if (err) throw err;
        res.forEach(row => {
            console.log(`Id: ${row.id} Name: ${row.product} Price: ${row.price} Quantity: ${row.stock_quantity}\n`)
        });