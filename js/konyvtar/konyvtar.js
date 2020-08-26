let inputs = document.querySelectorAll('form input');
let labels = document.querySelectorAll('form label');

// for(let i = 0; i < inputs.length; i++){
//   inputs[i].addEventListener('click', () => {
//     inputs[i].setAttribute('checked', true);
//     callIfChecked(inputs[i]);
//   });
// }
//
// function callIfChecked(input){
//     if(input.hasAttribute('checked')){
//       console.log("OKAY THIS IS CHECKED");
//     }
//
// }

let irasok = document.getElementById('irasok');
let galeria = document.getElementById('galeria');
let esemenyek = document.getElementById('esemenyek');

let irasokContent = document.getElementsByClassName('irasok')[0];
let galeriaContent = document.getElementsByClassName('galeria')[0];
let esemenyekContent = document.getElementsByClassName('esemenyek')[0];

irasok.addEventListener('click', toggleClasslist);
galeria.addEventListener('click', toggleClasslist);
esemenyek.addEventListener('click', toggleClasslist);

function toggleClasslist(){
  irasokContent.classList.toggle('disappear');
  galeriaContent.classList.toggle('disappear');
  esemenyekContent.classList.toggle('disappear');
}

// function checkIfChecked(){
//   for(let i = 0; i < inputs.length; i++){
//     if (inputs[i].hasAttribute('checked')){
//
//     }
//   }
// }
