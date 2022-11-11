# App Overview

Shopping Cart API by Express Framework (Javascript)
 
Design and build an api that can calculate the results of an order. Used the defined schemas and payloads provided to meet the requirements.

# Order Schema
The order schema is defined in the orders_api.yml file in this directory. This follows the Open Api Specification if you are not familiar with it, please take a moment to familiarize with this tool

# 1. Creating an Order
An order can be created by sending a POST request to your api. After an order has been created it can be retrieved through a GET request with a uuid in the url.

# 2. Adding a LineItem to an Order
A LineItem can be added to an order through the PUT /orders/:uuid endpoint

# 3. Adding a Discount to an Order
A discount can be added to an order through the PUT /orders/:uuid endpoint. This can be done alongside line items or separately. A discount can be applied to a single item or to the order as a whole. A discount can be a percentage or an amount.

# 4. Calculating Tax on an Order
All returns of an order should have correctly calculated the tax for that order. The valid result should take into account the tax rates or lack of tax rates on specific items.

# 5. Calculating the total of an Order
All returns of an order from the api should have a correctly calculated total of the order. The following criteria is how an order total should be calculated:

  1. Apply order discounts
  2. Apply line item discounts
  3. Apply taxes
  4. Rounding should be done to the closest penny.

# Assumptions
  You can assume that you will transact in USD.
  You can assume that orders will not be submitted more than 20 per second.
  You can use any datastore that you want.
  Discounts can stack (more than 1 for the order or any line item)
  An order total should never go below 0

# Setup

`npm install`

# Run

`npm start`
