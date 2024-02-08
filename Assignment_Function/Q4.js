// Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

// 2.5lac < no tax
//250001-500000  5%
//500001--750000 10%
//75001--10,00000 15%
//10,00000--12,50,000 20%
//12,50,000 -- 15,00,000 25%
//1500000 above 30%

function calculateTax(income) {
  let tax = 0;

  if (income <= 250000) return "no tax to pay";

  if (income >= 250000 && income <= 500000) {
    tax = ((income - 250000) * 5) / 100;
  }
  if (income >= 500000 && income <= 750000) {
    tax = ((income - 500000) * 10) / 100 + 12500;
  }
  if (income >= 750000 && income <= 1000000) {
    tax = ((income - 750000) * 15) / 100 + 12500 + 25000;
  }
  if (income >= 1000000 && income <= 1250000) {
    tax = ((income - 1000000) * 20) / 100 + 12500 + 25000 + 37500;
  }
  if (income >= 1250000 && income <= 1500000) {
    tax = ((income - 1250000) * 25) / 100 + 12500 + 25000 + 37500 + 50000;
  }

  if (income > 1500000) {
    tax =
      ((income - 1500000) * 30) / 100 + 12500 + 25000 + 37500 + 50000 + 62500;
  }
  return tax;
}
console.log(calculateTax(200000));
return 0;
