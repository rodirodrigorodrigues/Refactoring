class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // referência
  }

  applyDiscount(discount) {
    // modifica o objeto existente -> efeitos colaterais
    this._price.amount -= discount;
  }

  get price() {
    return this._price;
  }
}

// Uso
const price = new Money(100, 'USD');
const product1 = new Product('Shirt', price);
const product2 = new Product('Hat', price);

product1.applyDiscount(10);

console.log(product2.price.amount); // 90 efeito colateral inesperado!

// -----

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
    Object.freeze(this); // impede mutações
  }

  add(value) {
    return new Money(this.amount + value, this.currency);
  }

  subtract(value) {
    return new Money(this.amount - value, this.currency);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  applyDiscount(discount) {
    // cria um novo Money -> sem efeitos colaterais
    this._price = this._price.subtract(discount);
  }

  get price() {
    return this._price;
  }
}

// Uso
const price = new Money(100, 'USD');
const product1 = new Product('Shirt', price);
const product2 = new Product('Hat', price);

product1.applyDiscount(10);

console.log(product1.price.amount); // 90
console.log(product2.price.amount); // 100 ✅ sem efeito colateral

// Se o objeto é conceito de valor → use Value Object (Change Reference to Value).
// Se o objeto é entidade com identidade própria → mantenha referência (não use essa refatoração).