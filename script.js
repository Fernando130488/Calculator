let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.display').innerHTML = `${calculation}`;

function updateCalculation (value) {
  if (value === '=') {
    calculation = eval(calculation);
  } else if ('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'){
    calculation += value;
  }

  localStorage.setItem('calculation', calculation);

  document.querySelector('.display').innerHTML = `${calculation}`;
}