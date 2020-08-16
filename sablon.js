import * as mobilenavbar from './js/main/mobilenavbar.js';
import * as languagehandler from './js/main/languagehandler.js';
import * as loading from './js/main/loading.js';

/******** LOADING SCREEN START**********/

loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container', false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});

/******** LOADING SCREEN END **********/

/***************** FUNCTION CALLS START ********************/


/***************** FUNCTION CALLS END ********************/
