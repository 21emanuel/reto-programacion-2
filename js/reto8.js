const dia = Number(prompt("ingrese un dia"));
const mes = Number(prompt("ingrese un mes"));
const año = Number(prompt("ingrese un año"));

if (dia === 25 && mes === 11) {
  alert(`Esta fecha si corresponde a navidad del año ${año}`);
} else {
  alert(`No es navidad`);
}
