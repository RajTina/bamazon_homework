var mysql = require('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"

})

connection.connect(function(err){
    if (err) throw err;
    console.log ("Welcome to Bamazon Store!");
    createTable();

})
var createTable = function (){
    connection.query("select * from product",function(err,res){
        for (var i =0; i <res.length; i++){
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+ res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"\n");
        }
    promptCustomer(res);
    })
}

var promptCustomer = function (res){
    inquirer.prompt([{
        type:'input',
        name: 'choice',
        message: "what do you want to buy?'[quit with Q]"
    }]).then (function(answer){
        var correct = false;
        if (answer.choice.toUpperCase()=="Q"){
            process.exit();
        }
        for (var i = 0; i<res.length;i ++){
            if (res[i].product_name ==answer.choice){
                 correct = true;
                 var product = answer.choice;
                 var id = i;
                 inquirer.prompt({
                     type: "input",
                     name: "quantity",
                     message: "how many do you want to buy?",
                     validate: function (value){
                         if (isNaN(value)==false){
                             return true;
                         } else {
                             return false;
                         }
                     }
                 }).then (function (answer){
                     if ((res[id].stock_quantity - answer.quantity)>0){
                         connection.query("UPDATE product SET  stock_quantity =' "+(res[id].stock_quantity - answer.quantity)+"' WHERE product_name = '"+product +"'", function (err,res2){
                             console.log ("product Bought")
                             createTable();
                         })
                     } else {
                         console.log("Insufficient quantity!please slect something else!");
                         promptCustomer(res);
                     }
                 })
            }
        }
        if (i == res.length && correct == false){
            console.log ("not a valid product!");
            promptCustomer (res);
        }
    })
}