# bamazon_homework
 Created an Amazon-like storefront with the using of MySQL and node.js.  The app will take in orders from customers and deplete stock from the store's inventory.

 Saved and require the MySQL and Inquirer npm packages in the homework files, because the app will need them for data input and storage.

## Mysql_Database

 Created a MySQL Database called `bamazon`.

2. Then created a Table inside of that database called `products`.

3. The products table  have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populated this database with around 10 different products. (i.e. Inserted "mock" data rows into this database and table).

##Bamazon_Customer.js

Prints the products in the store.

Prompts customer which product they would like to purchase by ID number.

Asks for the quantity.

If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
If the purchase goes through, it updates the stock quantity to reflect the purchase.
It will also update the product sales in the department MySQL database table.

##Technologies used
Node.js
Inquire NPM Package (https://www.npmjs.com/package/inquirer)
MYSQL NPM Package (https://www.npmjs.com/package/mysql)

###Built With
Visual Studio Code - Text Editor
MySQL/MySQLWorkbench
Terminal/Gitbash

##Author
Tina Azad
 #JS/MySQL/Node.js