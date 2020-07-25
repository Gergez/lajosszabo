// import { loadDoc } from '../main/fetch.js';
//
// const fetchNavbar = loadDoc();

import * as mobilenavbar from '../main/mobilenavbar.js';
import * as languagehandler from '../main/languagehandler.js';
import * as loading from '../main/loading.js';

/*DECLARE SECTION SELECTORS, AND ADD EVENT LISTENER TO THEM TO BE ABLE TO MAKE THE CONTENT DISAPPEAR*/
  const sections = document.querySelectorAll('section');
  const titles = document.querySelectorAll('section h1');
  let containers = [];

  for(let i = 0; i < titles.length; i++){
    containers.push(titles[i].nextElementSibling);
  }

  for(let i = 0; i < titles.length; i++){
    titles[i].addEventListener('click', () => {
      containers[i].classList.toggle('disappear');
    })
  }


  // var containers = titles.forEach((title) => title.children());
  // containers.forEach((container) => container.addEventListener('click', () => {
  // container.style.backgroundColor = 'red';
// }));

//   for(var i = 0; i < titles.length; i++){
// // Kell ide, hogy külön kezelje egyes titls-ök paragrafusait ( könyveit)!!
//     var paragraph = document.querySelectorAll('.konyvek_wrapper .konyvek_inner_wrapper p');
//     paragraphs.push(paragraph);
//
//     var button = document.createElement('BUTTON');
//     button.style.width = '30px';
//     button.style.height = '20px';
//     button.style.background = "black";
//     button.style.border = "none";
//     button.style.marginLeft = "20px";
//
//     button.addEventListener('click', () => {
//       for (var j = 0; j < paragraphs.length; j++){
//           // paragraphs[j].style.display = "none";
//       }
//       // console.log("wow", i);
//     });
//
//     titles[i].appendChild(button);
//     console.log('in for end', i);
//   }


// function konyvekMenu(){}
//
//
//
// function setup(){
//   konyvekMenu();
// }
//
// setup();




/*FOR LOADER*/

loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container',false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});
