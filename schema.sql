CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    item_id INTEGER(50) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2), 
    stock_quantity INTEGER(50),
    PRIMARY KEY(item_id)
    )



