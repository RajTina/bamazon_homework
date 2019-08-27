-- create database bamazon; 
use  bamazon;
drop table product;
  create table product
  (item_id int auto_increment not null,
  product_name varchar(50) not null,
  department_name varchar(50) not null,
  price decimal(12,4) not null,
  stock_quantity int (12) not null,
 primary key(item_id)
  )
  select * from bamazon.product;
  insert into product (item_id, product_name,department_name,price,stock_quantity)
	values (1, 'laptop','electronic', '300', 5);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'iphone x','electronic', '800', 4);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'rice cooker','kitchen', '60', 3);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'pillows','household', '100', 2);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'tv','electronic', '1000', 1);
   insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'microwave','electronic', '200', 1);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'handbag','beauty', '50', 3);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'blander','kitchen', '30', 2);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'king bedsheet','household', '80', 2);
    insert into product ( product_name,department_name,price,stock_quantity)
	values ( 'notebooks','school supply', '10', 12);
  