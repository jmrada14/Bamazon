# Bamazon
bamazon is a command line interface application to showcase managing data in a MySQL database via javascript/Node.js.
"Bamazon" is really three separate application that run from different files:

* bamazonCustomer   : Allows the user to place an order for any of the items in the database. 
* bamazonManager    : Allows the user to manage inventory.

### How To Run <a name="howToRun"></a>
To run any of the three applications for Bamazon, just run the file from node from your command line , like so:
```
$ node main.js
$ node manager.js
```

**manager.js**

  When the program starts, it shows a set of menu options:

  - View Products for Sale

  - View Low Inventory

  - Add to Inventory

  - Add New Product
**main.js**

Running this application will first display all of the items available for sale, showing the ids, names, and prices of products for sale. 

[DEMO](https://drive.google.com/file/d/1MmgSYz29XMBikdOw442VHLsaIpOOGsGc/view)
