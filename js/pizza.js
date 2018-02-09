//
/* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var order11821 = {
	customer1: {
	    customerName: "James Franko",
	    address: "2155 E Lake Dr",
	    city: "Seattle",
	    state: "WA",
	    zipCode: "11310"
	},

    pizza: {
	    crust:"thin",
	    pizzaSauce: "robust marinara",
	    cheese: "regular",
	    veggies: ["olives", "green peppers"],
	    meats: ["pepperoni", "ham", "sausage"]
  	
    },

    
	    sideItems: ["breadsticks", "bbq wings 6 piece"],
	    sauces: "ranch",
	    specialInstructions: "please cut into squares",
	    paymentType: "cash",
	    storeId: "112"
	  

};
//console.log(order11821);

var order11327 = {
	customer2: {
		customerName: "Justin Bieber",
		address: "1801 W Rodeo Dr",
		city: "Beverly Hills",
		state: "CA",
		zipCode: "91833"
	},

    pizza: {
	    crust: "stuffed crust",
	    pizzaSauce: "creamy garlic alfredo",
	    cheese: ["double", "regular"],
	    veggies: ["onion", "anchovies", "mushrooms"],
	    meats: ["chicken", "bacon"]
    },

    
	sideItems: "double fudge brownie dessert",
	sauces: ["bbq", "garlic sauce"],
	specialInstructions: "call 815 at the gate",
	paymentType: "credit card",
	storeId: "382"
	    
};
//console.log(order11327);

/*Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/
	var currentOrders = {
		daOrders: [order11821, order11327]
	} //Stores both var as objects in which it helps refer back to the objects and properties
	 //within those var


 /*var currentOrders = {
 	customers: {
	    customerName: ["Justin Bieber", "James Franko"],
	    address: ["1801 W Rodeo Dr", "2155 E Lake Dr"],
	    city: ["Beverly Hills", "Seattle"],
	    state: ["CA", "WA"],
	    zipCode: ["91833", "11310"]
	},

	pizza: {
		crust: ["stuffed crust", "thin"], 
		pizzaSauce: ["creamy garlic alfredo", "robust marinara"],
		cheese: "double",
		veggies: ["onion", "anchovies", "mushrooms", "olives", "green peppers"],
		meats: ["chicken", "bacon", "pepperoni", "ham", "sausage"]
	},

sideItems: ["double fudge brownie dessert", "breadsticks", "bbq wings 6 piece"],
sauces: ["bbq", "garlic sauce", "ranch"],
specialInstructions: ["call 815 at the gate", "please cut into squares"],
paymentType: ["credit card", "cash"],
storeId: ["382", "112"]
};
console.log(currentOrders);
 
/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
currentOrders.daOrders[0].pizza.pizzaSauce = "Classic Marinara";
currentOrders.daOrders[0].pizza.veggies = "Spinach";
currentOrders.daOrders[0].pizza.meats = "No Sausage";
currentOrders.daOrders[0].orderTime = "20 minutes";

currentOrders.daOrders[1].issues = "Burn't Pizza, delivery expected to be a little late";

console.log(currentOrders.daOrders[0]); // Adding ".daOrders[0]" allows the code to know what
//I changed with is order11821. Without it, on node it would produce [array], [objects]
console.log(currentOrders.daOrders[1]);