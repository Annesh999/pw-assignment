const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add  Meat in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart);
let me;
shoppingCart.forEach((element) => {
  if (element === "Meat") {
    me = true;
  }
});

if (!me) {
  shoppingCart.unshift("Meat");
}
// console.log(shoppingCart);

// add Sugar at the end of our shopping cart if it has not been already added

let su;
shoppingCart.forEach((element) => {
  if (element === "Sugar") {
    su = true;
  }
});

if (!su) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let allergic = true;
if (allergic) {
  const index = shoppingCart.indexOf("Honey");
  if (index > -1) {
    shoppingCart.splice(index, 1);
  }
}
// modify Tea to 'Green Tea'
let modifingIndex = shoppingCart.indexOf("Tea");
shoppingCart[modifingIndex] = "Green Tea";
console.log(shoppingCart);
