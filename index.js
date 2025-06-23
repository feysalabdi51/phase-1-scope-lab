// 1. Declare a variable in global scope using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare a global variable from inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicit global variable
}

// 4. Overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'nancy';

// 6. Try to change the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'karen'; // This will throw an error
}
