// Você pega uma expressão complexa e a extrai para uma variável com nome significativo.
// Isso melhora:
// Legibilidade
// Clareza da intenção
// Manutenibilidade
// Debug

return order.quantity * order.itemPrice -
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
  Math.min(order.quantity * order.itemPrice * 0.1, 100);

// Refatoração

const basePrice = order.quantity * order.itemPrice;
const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05; // desconto
const shipping = Math.min(basePrice * 0.1, 100); // frete

return basePrice - quantityDiscount + shipping;