import * as mobilenavbar from '../main/mobilenavbar.js';
import * as languagehandler from '../main/languagehandler.js';
import * as loading from '../main/loading.js';

/******** LOADING SCREEN START**********/

loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container', false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});

/******** LOADING SCREEN END **********/

/***************** FUNCTION CALLS START ********************/

window.onhashchange = () => {
  languagehandler.languageContentUpdater();
}

window.onload = () => {
  languagehandler.languageOnLoadUpdater();
}

/***************** FUNCTION CALLS END ********************/

const sections = document.querySelectorAll('section');
const titles = document.querySelectorAll('section h1');
let containers = [];

for(let i = 0; i < titles.length; i++){
  containers.push(titles[i].nextElementSibling);
}

function collapseAccordion(collapsable){
  for (let i = 0; i < collapsable.length; i++){
    collapsable[i].addEventListener('click', () => {
      // containers[i].classList.toggle('disappear');
      // document.querySelectorAll('.section h1'), '::after'.classList.toggle('.rotate');
      if (sections[i].style.maxHeight){
        sections[i].style.maxHeight = null;
      }else {
        sections[i].style.maxHeight = sections[i].scrollHeight + "px";
      }
    })
  }
}

collapseAccordion(titles);
// collapseAccordion(containers);
