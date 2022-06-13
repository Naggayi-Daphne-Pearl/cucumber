const { Given, When, Then, After, Before} = require('@cucumber/cucumber');
const {expect} = require('chai');

let price  = 10; 
let stock = 5; 
let receipt; 

//Hooks are used for setup and teardown the environment before and after each scenario.
Before(function () {
    console.log('Inside before the scenario');
  });

After(function () {
    console.log('Inside After');
    });



function processRefunds (){
    return true; 
}

Given('the customer has purchased a kettle for €{int}', function (int) {
    price = int;  
    });

Given('they have their receipt', function () {
    receipt = true; 
    });

When('the sales assistant processes the refund', function () {
    processRefunds(); 
    });

Then('the stock inventory for kettles is incremented by {int}', function (stock) {
    stock += 1;
    });

Then('the customer\'s card is credited with €{int}', function (refundedValue) {
    expect(price).equal(refundedValue)
    });
   