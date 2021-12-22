const num1 = Number(prompt("ingrese un numero"));
const num2 = Number(prompt("ingrese segundo numero"));
const num3 = Number(prompt("ingrese tercer numero"));

if (num1 > num2 && num3) {
  alert(`el primer numero ingresado es mayor con: ${num1}`);
} else if (num2 > num1 && num3) {
  alert(`el segundo numero ingresado es mayor con: ${num2} `);
} else if (num3 > num1 && num2) {
  alert(`el tercer numero ingresado es mayor con: ${num3} `);
}
