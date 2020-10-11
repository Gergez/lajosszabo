import * as mobilenavbar from '../general/general.js';


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
  languagehandler.languageOnLoadUpdater();
}

window.onchange = () => {

}


/*DECLARE SECTION SELECTORS, AND ADD EVENT LISTENER TO THEM TO BE ABLE TO MAKE THE CONTENT DISAPPEAR*/
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
