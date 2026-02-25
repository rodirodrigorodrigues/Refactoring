function base(reading) {
  return reading.quantity * reading.monthlyRate;
}

function taxableCharge(reading) {
  return Math.max(0, base(reading) - reading.taxThreshold);
}

function calculateBaseCharge(reading) {
  return base(reading) + reading.fixedFee;
}

// Todos os métodos acima possuem a mesma abstração e se referem ao mesmo conceito.

class Reading {
  constructor({ quantity, monthlyRate, taxThreshold, fixedFee }) {
    this.quantity = quantity;
    this.monthlyRate = monthlyRate;
    this.taxThreshold = taxThreshold;
    this.fixedFee = fixedFee;
  }

  base() {
    return this.quantity * this.monthlyRate;
  }

  taxableCharge() {
    return Math.max(0, this.base() - this.taxThreshold);
  }

  calculateBaseCharge() {
    return this.base() + this.fixedFee;
  }
}