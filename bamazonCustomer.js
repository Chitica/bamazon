
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});
  
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, result, fields){
        if(err) throw err;
        console.log(result);

    itemSearch();
    })
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a valid number.';
	}
}

function itemSearch() {
    inquirer
      .prompt([{
        name: "item_id",
        type: "input",
        message: "What is the ID of the product that you would like to buy?",
        validate: validateInput
        },
    {
        
        name: "number_needed",
        type: "input",
        message: "How many would you like to buy?",
        validate: validateInput
    }]).then(function(input){
        var query = "SELECT stock_quantity, product_name, price FROM products WHERE ?";
        connection.query(query, { item_id: input.item_id }, function(err, data) {
            if(err) throw err;
            
            var productData = data[0];
            var quantity = input.number_needed;
            if(productData.stock_quantity === 0){
                console.log("There are no " + data[0].product_name + " in stock at this moment.")
            
            
            }else {
                
                if (quantity <= productData.stock_quantity) {
                    var totalPrice = parseInt(quantity) * parseInt(productData.price); 
                    console.log("Your order was successfully processed, your total comes out to " + "$" + totalPrice);
                    var query    = "UPDATE products SET ? WHERE ?";
                    connection.query(query,[{stock_quantity: productData.stock_quantity - quantity},  { item_id: input.item_id }], function (error, data, fields) {
                    if (error) throw error;
                    })
            }else{
                console.log("The quantity you requested is not available. We only have " + productData.stock_quantity + " " + data[0].product_name + " available at this moment!")
            }
      }

      function displayInventory(err, data){
            if (err) throw err;
            var count = "";
            for (var i = 0; i < data.length; i++) {
                count = "",                count += item_id

            }
            itemSearch() 
        }
    });
});
}