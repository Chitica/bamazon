# bamazon

THIS IS THE LINK TO WATCH THE APP IN ACTION. HOPE YOU ENJOY!!
https://drive.google.com/open?id=171pUXLQ3kT6v1bUpRbaGpgGzgZJQLFEq


THE FOLLOWING ARE THE STEPS I MADE TO COMPLETE MY APP

   First I created a MySQL Database called bamazon.

    Then  I created a Table inside of that database called products.

    Then I created the following columns in my table:

        item_id (unique id for each product)

        product_name (Name of product)

        department_name

        price (cost to customer)

        stock_quantity (how much of the product is available in stores)
        
    Then I created a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. It will include the ids, names, and prices of the products.

    The app should then prompt users with two messages.
        The first should ask them the ID of the product they would like to buy.
        The second message should ask how many units of the product they would like to buy.

    Once the customer has placed the order, my app should check if the database has enough of the product to meet the customer's request.
        If not, the app will log the phrase "the quantity you requested is not available", and then prevent the order from going through.

    However, if the store does have enough of the product, the customer order will be fulfilled.
        This means updating the SQL database to reflect the remaining quantity.
        Once the update goes through, the customer will see the total cost of their purchase.


