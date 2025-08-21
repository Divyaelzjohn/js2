/* 1.Object Literals -> An object literal is {key:value}.It's the simplest way to group realted data together.*/
// const user = {
//   name: "Divya",
//   age: 22,
//   isStudent: true
// };

// console.log(user.name); // Divya
/* Accesing Object Properties(Dot vs Bracket) */
// 1.Dot Notification(Object.key)-> easy, clean , when you know the property name
// Bracket Notation(obj["key"]) -> used when the property name is dynamic or not a valid identifier.

/*const user = {
  name: "Divya",
  age: 22,
  "user-role": "student"
};
// Dot notation
console.log(user.name);   // Divya
// Bracket notation
console.log(user["age"]); // 22
console.log(user["user-role"]); // student (dot notation won't work here)
let key = "name";
console.log(user[key]);   // Divya (dynamic access)*/

/*const participant={
  name:"Alex",
  email:"alex123@gmail.com",
  ticketType:"VIP"
};

console.log("Name:",participant.name);
let field="email";
console.log("Email:",participant[field]);

const payment={"payment-status":"Paid"}
console.log(payment["payment-status"])*/

// Methods- A Method is simply a function an object. It allows the  object to do something(behavour, not just store data)

/*const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract(a, b) { // shorthand method syntax
    return a - b;
  }
};
console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6*/


// mini project example
/*const bankAccount = {
  owner: "Divya",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited. New balance: ${this.balance}`);
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
};
bankAccount.deposit(500);   // 500 deposited. New balance: 1500
bankAccount.withdraw(2000); // Insufficient funds!*/


// Banking App(account.deposite/account.withdraw)

/*const account = {
  owner: "Divya",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₹${amount}. New Balance: ₹${this.balance}`);
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ₹${amount}. New Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
};
account.deposit(500);   // Deposited ₹500. New Balance: ₹1500
account.withdraw(200);  // Withdrew ₹200. New Balance: ₹1300
account.withdraw(2000); // Insufficient funds!*/


// Shopping Cart(cart.addItem/cart.getTotal)

/*const cart = {
  items: [],
  addItem(product, qty) {
    this.items.push({ ...product, qty });
    console.log(`${qty} x ${product.name} added to cart`);
  },
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.qty, 0);
  }
};
const product1 = { name: "Laptop", price: 50000 };
const product2 = { name: "Headphones", price: 2000 };
cart.addItem(product1, 1);  // 1 x Laptop added to cart
cart.addItem(product2, 2);  // 2 x Headphones added to cart
console.log("Total Cart Value: ₹" + cart.getTotal());*/

/*const player={
  name:"Hero",
  health:100,
  position:{x:0, y:0},

  move(direction){
    if(direction==="up")this.position.y++;
    if(direction==="down")this.position.y--;
    if(direction==="left")this.position.x--;
    if(direction==="right")this.position.x++;
    console.log(`${this.name} moved ${direction}->Position:`,this.position)
  },
  attck(enemy){
    console.log(`${this.name} attacks ${enemy.name}!`);
    enemy.health-=10;
    console.log(`${enemy.name}'s health:${enemy.health}`)
  }
};
const enemy={name:"Dragon",health:50};
player.move("up");
player.move("right");
player.move(enemy);*/


// Game Character(player.move/player.attack)

/*const player = {
  name: "Knight",
  health: 100,
  position: { x: 0, y: 0 },
  move(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    console.log(`${this.name} moved to (${this.position.x}, ${this.position.y})`);
  },
  attack(target) {
    target.health -= 10;
    console.log(`${this.name} attacked ${target.name}! ${target.name} health: ${target.health}`);
  }
};
const enemy = { name: "Dragon", health: 200 };
player.move(2, 3);     // Knight moved to (2, 3)
player.attack(enemy);  // Knight attacked Dragon! Dragon health: 190*/


// this.keyword->this refers to the current object that is calling the method. Inside an object's method, this allows us to access the object's own properties

// Banking App

/*const account = {
  owner: "Divya",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;  // 'this' refers to account object
    console.log(`${this.owner} deposited ₹${amount}. Balance: ₹${this.balance}`);
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ₹${amount}. Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
};
account.deposit(500);   // Divya deposited ₹500. Balance: ₹1500*/

// Shopping CaretPosition(with this)
/*const cart = {
  items: [],
  addItem(product, qty) {
    this.items.push({ ...product, qty });  // 'this' = cart object
    console.log(`${qty} x ${product.name} added to cart`);
  },
  getTotal() {
    return this.items.reduce((t, item) => t + item.price * item.qty, 0);
  }
};
const product = { name: "Laptop", price: 50000 };
cart.addItem(product, 1);
console.log("Total: ₹" + cart.getTotal());*/

// Game player(with this)
/*const player = {
  name: "Knight",
  health: 100,
  move(x, y) {
    this.x = x;   // 'this' refers to player object
    this.y = y;
    console.log(`${this.name} moved to position (${this.x}, ${this.y})`);
  },
  takeDamage(dmg) {
    this.health -= dmg;
    console.log(`${this.name} took ${dmg} damage. Health: ${this.health}`);
  }
};
player.move(5, 7);       // Knight moved to position (5, 7)
player.takeDamage(20);   // Knight took 20 damage. Health: 80*/

/*-this is what connects data + methods inside objects.
  -Used in almost every real-world project:
    -Banking apps (accessing this.balance)
    -Shopping carts (this.items)
    -Games (this.health, this.position)
  -Without this, methods can’t talk to the object’s properties.*/




// Prototypes & Inheritance -In javascript every object has a hidden property calles _proto_ (its prototype). If you call a method on an object and it's not found, JS looks inside its prototype. This allows inheritance: sharing methods across objects without duplication.

/*function Animal(name) {
  this.name = name;
}
// Add method to prototype
Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};
const dog = new Animal("Dog");
const cat = new Animal("Cat");
dog.speak(); // Dog makes a sound
cat.speak(); // Cat makes a sound*/


// Banking System- Shared Methods via Prototype

  /*function Account(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  
  Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ₹${amount}. Balance: ₹${this.balance}`);
  };
  
  Account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ₹${amount}. Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  };
  
  const acc1 = new Account("Divya", 1000);
  const acc2 = new Account("Alex", 2000);
  
  acc1.deposit(500);  // Divya deposited ₹500. Balance: ₹1500
  acc2.withdraw(1000); // Alex withdrew ₹1000. Balance: ₹1000*/

// Shopping Cart-Prototype Inheritance
/*function Cart() {
  this.items = [];
}
Cart.prototype.addItem = function(product, qty) {
  this.items.push({ ...product, qty });
};
Cart.prototype.getTotal = function() {
  return this.items.reduce((t, i) => t + i.price * i.qty, 0);
};
const cart1 = new Cart();
const cart2 = new Cart();
const product = { name: "Phone", price: 20000 };
cart1.addItem(product, 1);
cart2.addItem(product, 2);
console.log("Cart1 Total:", cart1.getTotal()); // 20000
console.log("Cart2 Total:", cart2.getTotal()); // 40000*/


// Game Characters-Inheritance

/*function Character(name, health) {
  this.name = name;
  this.health = health;
}
Character.prototype.attack = function(target) {
  target.health -= 10;
  console.log(`${this.name} attacked ${target.name}. ${target.name} health: ${target.health}`);
};
function Warrior(name, health, weapon) {
  Character.call(this, name, health); // inherit properties
  this.weapon = weapon;
}
Warrior.prototype = Object.create(Character.prototype); // inherit methods
Warrior.prototype.constructor = Warrior;
Warrior.prototype.specialAttack = function(target) {
  target.health -= 30;
  console.log(`${this.name} used special attack with ${this.weapon}! ${target.name} health: ${target.health}`);
};

const knight = new Warrior("Knight", 100, "Sword");
const dragon = new Character("Dragon", 200);

knight.attack(dragon);       // Knight attacked Dragon. Dragon health: 190
knight.specialAttack(dragon); // Knight used special attack with Sword! Dragon health: 160*/


// ES6 Classes->class is just syntactic sugar over prototype(a cleaner way to write them),Haas a constructor() for properties and methods are added inside the class, Supports inheritance with extends and super()

/*class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}
const p1 = new Person("Divya", 22);
p1.greet(); // Hi, I am Divya and I am 22 years old*/


// Banking System with Classes

/*class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ₹${amount}. Balance: ₹${this.balance}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ₹${amount}. Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
}
const acc1 = new Account("Divya", 1000);
acc1.deposit(500);
acc1.withdraw(200);*/

// Shopping Cart with Classes

/*class Cart {
  constructor() {
    this.items = [];
  }
  addItem(product, qty) {
    this.items.push({ ...product, qty });
  }
  getTotal() {
    return this.items.reduce((t, i) => t + i.price * i.qty, 0);
  }
}
const cart = new Cart();
cart.addItem({ name: "Laptop", price: 50000 }, 1);
cart.addItem({ name: "Headphones", price: 2000 }, 2);
console.log("Total:", cart.getTotal()); // 54000*/


// Game Character with Inheritance
/*class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  attack(target) {
    target.health -= 10;
    console.log(`${this.name} attacked ${target.name}. ${target.name} health: ${target.health}`);
  }
}
class Warrior extends Character {
  constructor(name, health, weapon) {
    super(name, health); // call parent constructor
    this.weapon = weapon;
  }
  specialAttack(target) {
    target.health -= 30;
    console.log(`${this.name} used ${this.weapon} special attack! ${target.name} health: ${target.health}`);
  }
}
const knight = new Warrior("Knight", 100, "Sword");
const dragon = new Character("Dragon", 200);
knight.attack(dragon);        // Knight attacked Dragon. Dragon health: 190
knight.specialAttack(dragon); // Knight used Sword special attack! Dragon health: 160*/


// What is this? -> imagine you are pointed to yourself and saying

/*const account = {
  owner: "Divya",
  balance: 1000,
  deposit(amount) {
    this.balance += amount; // 'this' means account
    console.log(`${this.owner} deposited ${amount}. Balance: ${this.balance}`);
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ${amount}. Balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance!");
    }
  }
};

account.deposit(500);   // 'this' = account
account.withdraw(200);

const cart={
  items:[],
  addItem(item,price){
    this.items.push({item, price});
    console.log(`${item} added!`)
  },
  getTotal(){
    let total=0;
    this.items.forEach(products=>total+=products.price);
    console.log(`Total: ${total}`)
  }
}
cart.addItem("Book",200);
cart.addItem("Pen",50);
cart.getTotal();


const player = {
  name: "Warrior",
  health: 100,
  attack() {
    console.log(`${this.name} attacked!`); // 'this' = player
  },
  heal(points) {
    this.health += points;
    console.log(`${this.name} healed ${points}. Health: ${this.health}`);
  }
};

player.attack();
player.heal(20);
*/
