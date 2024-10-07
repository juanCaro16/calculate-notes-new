const username = document.getElementById('nombre');
const data1 = document.getElementById('nota1');
const data2 = document.getElementById('nota2');
const data3 = document.getElementById('nota3');
const btnCalculate = document.getElementById('btn-calculate');
const btnPredict = document.getElementById('btn-predict');
const response = document.getElementById('resultado');

btnCalculate.addEventListener('click', calculateNote);

function calculateNote(event) {
  event.preventDefault();

  let note1 = Number(data1.value);
  let note2 = Number(data2.value);
  let note3 = Number(data3.value);

  if (!validarRangoNotas(note1, note2, note3)) {
    response.textContent = "Las notas deben estar entre 0 y 5.";
    response.style.color = 'red';
    return;
  }

  let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2);

  validarNotas(result);
}

function validarNotas(result) {
  if (result < 3.5) {
    response.textContent = `Hola ${username.value}! Perdió la materia, su nota definitiva es: ${result}`;
    response.style.color = 'black';
  } else if (result >= 3.5 && result < 4.5) {
    response.textContent = `Hola ${username.value}! Ganó la materia, ¡Felicidades! Su nota definitiva es: ${result}`;
    response.style.color = 'orange';
  } else if (result >= 4.5) {
    response.textContent = `Hola ${username.value}! Ganó la materia, ¡Felicidades! Fue sobresaliente. Su nota definitiva es: ${result}`;
    response.style.color = 'green';
  }
}

function validarRangoNotas(note1, note2, note3) {
  return note1 >= 0 && note1 <= 5 && note2 >= 0 && note2 <= 5 && note3 >= 0 && note3 <= 5;
}

btnPredict.addEventListener('click', predecirNotas);

function predecirNotas() {
  let note1 = Number(data1.value);
  let note2 = Number(data2.value);

  if (!validarRangoNotas(note1, note2, 0)) {
    response.textContent = "Las notas deben estar entre 0 y 5 para predecir.";
    response.style.color = 'red';
    return;
  }

  // Cálculo de la nota mínima en nota3 para obtener un 3.5 final
  let notaNecesaria = ((3.5 - (note1 * 0.3) - (note2 * 0.3)) / 0.4).toFixed(2);

  if (notaNecesaria > 5) {
    response.textContent = `Para obtener una nota definitiva de 3.5, deberías sacar más de 5 en la nota 3, lo cual no es posible.`;
    response.style.color = 'red';
  } else  {
    response.textContent = `Para obtener una nota definitiva de 3.5, debes sacar al menos ${notaNecesaria} en la nota 3.`;
    response.style.color = 'green';
    
  }
}
