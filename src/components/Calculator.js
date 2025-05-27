import { calculate } from "../services/calculatorService.js";

export function createCalculator() {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const operator = document.getElementById("operator");
  const resultDisplay = document.getElementById("result");
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const op = operator.value;

    try {
      const result = calculate(a, b, op);
      resultDisplay.textContent = `Resultado: ${result}`;
    } catch (error) {
      resultDisplay.textContent = error.message;
    }
  });
}
