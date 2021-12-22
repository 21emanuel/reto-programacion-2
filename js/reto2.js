const nota1 = Number(prompt("primer trimestre"));
const nota2 = Number(prompt("segundo trimestre"));
const nota3 = Number(prompt("tercer trimestre"));

let totalNota = nota1 + nota2 + nota3;
const notaFinal = totalNota / 3;
if (notaFinal >= 7) {
  alert(`FELICIDADES PROMOCIONASTE CON ${notaFinal}`);
} else {
  alert(`Vuelve el año que viene`);
}
