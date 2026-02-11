// A “Change Function Declaration” é um refactoring descrito por Martin Fowler (no livro Refactoring) que consiste em alterar a assinatura de uma função — ou seja:
// mudar o nome
// adicionar/remover parâmetros
// alterar a ordem dos parâmetros
// substituir múltiplos parâmetros por um objeto
// dividir um parâmetro em vários
// O objetivo é melhorar clareza, coesão e expressividade da API, sem mudar o comportamento do sistema.

// O nome da função não representa bem o que ela faz
function process(a, b) { ... }

// Muitos parâmetros (parameter list longa)
// Difícil lembrar a ordem
function createUser(name, email, age, role, isActive) { ... }

// Parâmetros opcionais ou confusos
// Fica difícil entender o que é obrigatório.
function calculate(price, discount, tax, includeShipping)

// Parâmetros que sempre viajam juntos
// Se vários argumentos sempre aparecem juntos, provavelmente deveriam virar um objeto.

// -----

// Exemplo: 1
// Problemas:
//   - Muitos parâmetros
//   - Difícil lembrar a ordem
//   - Cliente é um conceito único, mas está fragmentado
function createOrder(customerName, customerEmail, productId, quantity) {
  console.log(`Order for ${customerName} (${customerEmail})`);
  console.log(`Product: ${productId}, Quantity: ${quantity}`);
}

function createOrder({ customer, productId, quantity }) {
  console.log(`Order for ${customer.name} (${customer.email})`);
  console.log(`Product: ${productId}, Quantity: ${quantity}`);
}

createOrder({
  customer: { name: 'John Doe', email: 'john@example.com' },
  productId: '12345',
  quantity: 2
})

// Exemplo: 2
// Melhorar o nome:

function get(d) {
  return d * 1.1;
}

function applyInterestRate(amount) {
  return amount * 1.1;
}

// Exemplo 3
// introduzindo parâmetro opcional

function calculateTotal(price, tax) {
  return price + tax;
}

function calculateTotal(price, { tax = 0, discount = 0 } = {}) {
  return price + tax - discount;
}

calculateTotal(100, { tax: 10, discount: 5 });