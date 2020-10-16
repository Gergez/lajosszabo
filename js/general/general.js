import * as mobilenavbar from '../plugins/mobilenavbar.js';
import * as languagehandler from '../plugins/languagehandler.js';
import * as loading from '../plugins/loading.js';

// import * as logoPager from '../plugins/kepcsere.js';

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

document.onscroll = () => {
  mobilenavbar.toggleOnScroll();
};
