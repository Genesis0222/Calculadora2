import { add, subtract, multiply, divide } from "../utils/operations.js";

export function calculate(a, b, operator) {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error("Operador inválido");
  }
}
