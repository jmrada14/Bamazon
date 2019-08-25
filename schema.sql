DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
                          id INT NOT NULL AUTO_INCREMENT,
                          product VARCHAR(50) NOT NULL,
                          department VARCHAR(50) NOT NULL,
                          price DECIMAL(10,2) NOT NULL,
                          stock_quantity INT NOT NULL,
                          PRIMARY KEY (id)
);

SELECT * FROM products;