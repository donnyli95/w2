class Pizza {

  constructor(pizzaSize, pizzaCrust) {
    this.size = pizzaSize;
    this.crust = pizzaCrust;
    this.toppings = ["cheese"];

  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
};

const pizza = new Pizza();
pizza.price;
pizza.size = 's';

console.log(pizza);

/* expected output???
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ['cheese'];
}
*/

// let pizza1 = new Pizza();
// console.log(pizza1.toppings);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings); 
// console.log(pizza1);


// let pizza2 = new Pizza();
// console.log(pizza2.toppings);
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings);
// console.log(pizza2);