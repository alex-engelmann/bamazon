ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'penbed29';

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

create table products (
	item_id integer(10) auto_increment not null,
    product_name varchar(100) not null,
    department_name varchar(40) not null,
    price decimal(6,2) not null,
    stock_quantity integer(10) not null,
	primary key (item_id)
);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES('12 Celtic Bookmarks','books',1.99,5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES('Cracking the Coding Interview','books',26.99,5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES('Market Wizards','books',26.95,10);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES('A Primer of Drug Action','books',25.99,5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES('Dark Pools','books',27.00,5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES('Dragon Ball Culture','books',15.99,7);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
values('Xbox controller', 'electronics', 16.99, 5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
values('Logitech wireless mouse', 'electronics', 10.99, 4);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
values('Microsoft Bluetooth mouse', 'electronics', 19.99, 6);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
values('Raspberry Pi 3 B+ starter kit', 'electronics', 79.99, 5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
values('Bose noise cancelling wireless headphones', 'electronics', 299.99, 3);

select * from products;