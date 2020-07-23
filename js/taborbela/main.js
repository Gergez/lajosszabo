// import { loadDoc } from '../main/fetch.js';
//
// const fetchNavbar = loadDoc();

import * as mobilenavbar from './mobilenavbar.js';
import * as languagehandler from './languagehandler.js';
import * as loading from './loading.js';
//
//   var sections = document.querySelectorAll('section');
//   var titles = sections.forEach((item) => item.querySelectorAll('h1'));
//   var paragraphs = [];
//
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
//
//
// function konyvekMenu(){}
//
//
//
// function setup(){
//   konyvekMenu();
// }
//
// setup();

loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container',false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});
