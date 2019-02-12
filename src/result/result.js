import calculateResult from './calculate/calculate-result.js';

const json = window.localStorage.getItem('answers');
let answers = null;

if(json) {
    answers = JSON.parse(json);
} else {
    window.location = '/';
}

const weaponNode = document.getElementById('weapon');
weaponNode.textContent = calculateResult(answers);