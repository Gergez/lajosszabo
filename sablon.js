import * as mobilenavbar from './js/main/mobilenavbar.js';
import * as languagehandler from './js/main/languagehandler.js';

/******** LOADING SCREEN START**********/

function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 500);

  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

/******** LOADING SCREEN END **********/

/***************** FUNCTION CALLS START ********************/

onReady(function() {
  show('main_container', true);
  show('loading_container', false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});

/***************** FUNCTION CALLS END ********************/
