import * as pagehandler from './pagehandler.js';
import * as mobilenavbar from './mobilenavbar.js';
import * as languagehandler from './languagehandler.js';
import * as loading from './loading.js';


loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container', false);
  pagehandler.setUpNextPageButton();
  pagehandler.setUpPreviousPageButton();
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
  pagehandler.currentPageHandler();
});
