
import * as mobilenavbar from '../main/mobilenavbar.js';
import * as languagehandler from '../main/languagehandler.js';
import * as loading from '../main/loading.js';


loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container',false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});

window.onhashchange = () => {
  languagehandler.languageContentUpdater();
}

window.onload = () => {
  languagehandler.languageOnLoadUpdater()
};







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
      // document.querySelectorAll('.section h1'), '::after'.classList.toggle('.rotate');
      if (sections[i].style.maxHeight){
        sections[i].style.maxHeight = null;
      }else {
        sections[i].style.maxHeight = sections[i].scrollHeight + "px";
      }
    })
  }
