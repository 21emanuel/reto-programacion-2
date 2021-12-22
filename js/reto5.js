const numero = Number(prompt("ingrese un numero"));

if (numero > 0) {
  alert(`POSITIVO`);
} else if (numero < 0) {
  alert(`NEGATIVO`);
} else if (numero === 0) {
  alert(`NULO`);
}
