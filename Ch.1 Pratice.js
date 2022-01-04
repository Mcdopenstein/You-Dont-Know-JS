const bankAccount = 200;
const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;

let accountBalance = 303.91
let amount = 0;

function calculateTax(amount) {
    return amount * taxRate;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while( amount < accountBalance){
    amount = amount + phonePrice;
 if( amount < bankAccount){
     amount = amount + accessoryPrice;
 };   
}

amount = amount + calculateTax(amount);
console.log("Your purchase " + formatAmount(amount));

if (amount > accountBalance) {
    console.log("You can't afford this purchase. :(");
}