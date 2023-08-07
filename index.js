import './main.css';

// declaration variable

// variable paragraphe

let saveParagraphe = document.getElementById('save-paragraphe');
let countPara = document.querySelector('.count-para');
// variable button
const incrementEl = document.getElementById('increment');
const saveEl = document.getElementById('save');

// declaration of counter
let counter = 0;

incrementEl.addEventListener('click', increment);
function increment() {
  counter++;
  countPara.textContent = counter;
}

saveEl.addEventListener('click', save);
function save() {
  let numberOfpeople = ` ${counter} -`;
  saveParagraphe.textContent += numberOfpeople;
  counter = 0;
  countPara.textContent = 0;
}
