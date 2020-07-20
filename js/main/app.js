// import { loadDoc } from './fetch.js';
// const fetchNavbar = loadDoc();
import * as pagehandler from './pagehandler.js';
import * as mobilenavbar from './mobilenavbar.js';
import * as languagehandler from './languagehandler.js';

/******** LOADING SCREEN START**********/

function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 1000);

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
  pagehandler.setUpNextPageButton();
  pagehandler.setUpPreviousPageButton();
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
  pagehandler.currentPageHandler();
});

/***************** FUNCTION CALLS END ********************/
