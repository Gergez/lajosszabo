import * as pagehandler from './pagehandler.js';
import * as languagehandler from '../plugins/languagehandler.js';
import * as mobilenavbar from '../plugins/mobilenavbar.js';
import * as loading from '../plugins/loading.js';
import * as logoPager from '../plugins/kepcsere.js';


loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container', false);
  pagehandler.setUpNextPageButton();
  pagehandler.setUpPreviousPageButton();
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
  pagehandler.currentPageHandler();
});

window.onhashchange = () => {
  languagehandler.languageContentUpdater();
  pagehandler.setCurrentPage();
};

window.onload = () => {
  languagehandler.languageOnLoadUpdater();
};

document.onkeydown = () => {
  pagehandler.keyboardPager();
};

document.onscroll = () => {
  pagehandler.togglePagingArrow();
  mobilenavbar.toggleOnScroll();
};
