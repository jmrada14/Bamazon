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
//connect to DB and update the stock after purchase
connection.connect(function (err) {
    if (err) throw err;
    run();
    bamazon();
});
function run() {
    console.log('HELLO WORLD\n');
};


function bamazon() {
    connection.query('select * from products',function (err,res) {
     console.log(err,res)
        if (err) throw err;
        res.forEach(res => {
            console.log(`id: ${row.id} name: ${row.product} price: ${row.price} stockQuantity: ${row.stock_quantity}\n\n`);
        });
        questions();
    });
}

function questions() {
    inquirer
        .prompt([
        {
            message: "Please type in the product id you would like to order.",
            type: "input",
            name: "productId"
        },
        {
            message: "how many of this item would you like to purchase",
            type: "input",
            name: "productQuantity"
        };
    ]).then(function (ans) {
        let productId = ans.productId;
        let productQuantity = ans.productQuantity;
        withdrawProduct(productId, productQuantity);
    });
};

function withdrawProduct(productId, productQuantity){
    connection.query('select * from products', function (err,res) {
        console.log(err,res);
        if(err) throw err;
        let product;
        for(let j = 0; j < res.length; j++){
            product = res[j];
        };

    }
    );
};