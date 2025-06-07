// JavaScript OOPs (Object-Oriented Programming) Explained in Depth

/*
JavaScript is a prototype-based, multi-paradigm language that supports OOP concepts.
It allows us to use encapsulation, inheritance, abstraction, and polymorphism.
*/

// ---------------------------------------
// 1. OBJECT CREATION METHODS
// ---------------------------------------

// ✅ 1.1 Object Literal
const person = {
  name: "Anish",
  age: 21,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet();

// ✅ 1.2 Function Constructor
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.start = function () {
    console.log(`${this.brand} ${this.model} started.`);
  };
}
const car1 = new Car("Toyota", "Corolla");
car1.start();

// ✅ 1.3 Object.create (Prototypal Inheritance)
const animal = {
  type: "Mammal",
  sound() {
    console.log("Generic Animal Sound");
  },
};
const dog = Object.create(animal);
dog.type = "Dog";
dog.sound = function () {
  console.log("Bark");
};
dog.sound();

// ✅ 1.4 ES6 Classes
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} logged in.`);
  }
}

const user1 = new User("anish", "anish@example.com");
user1.login();

// ---------------------------------------
// 2. ENCAPSULATION
// ---------------------------------------
// Wrapping data and methods together. Access modifiers aren't native to JS,
// but we can simulate private fields using # (ES2022) or closures.

class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Anish");
acc.deposit(1000);
console.log("Balance:", acc.getBalance());

// ---------------------------------------
// 3. INHERITANCE
// ---------------------------------------
// One class derives properties and methods from another

class Admin extends User {
  constructor(username, email, role) {
    super(username, email); // call base constructor
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${user.username} deleted by ${this.username}`);
  }
}

const admin1 = new Admin("admin_anish", "admin@example.com", "admin");
admin1.login();
admin1.deleteUser(user1);

// ---------------------------------------
// 4. POLYMORPHISM
// ---------------------------------------
// Objects or methods behave differently based on context

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(3), new Square(4)];
shapes.forEach((shape) => {
  console.log("Area:", shape.area());
});

// ---------------------------------------
// 5. ABSTRACTION
// ---------------------------------------
// Hiding complex implementation details

class Database {
  #connect() {
    console.log("Connecting to DB...");
  }

  query(sql) {
    this.#connect();
    console.log(`Executing query: ${sql}`);
  }
}

const db = new Database();
db.query("SELECT * FROM users");

// ---------------------------------------
// BONUS: MIXINS (Multiple Inheritance Workaround)
// ---------------------------------------

let canSwim = {
  swim() {
    console.log(`${this.name} can swim.`);
  },
};

let canFly = {
  fly() {
    console.log(`${this.name} can fly.`);
  },
};

class Animal {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Animal.prototype, canSwim, canFly);
const duck = new Animal("Duck");
duck.swim();
duck.fly();
