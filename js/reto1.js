const num1 = Number(prompt("ingresar un numero"));
const num2 = Number(prompt("ingresar un numero"));

if (num1 > num2) {
  const suma = num1 + num2;
  const resta = num1 - num2;
  alert(`La suma es: ${suma} y su restas es: ${resta}`);
} else if (num1 < num2) {
  const producto = num1 * num2;
  const division = num1 / num2;
  alert(`El producto es: ${producto} y su division es: ${division}`);
}
