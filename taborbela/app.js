import * as pagehandler from '../js/main/pagehandler.js';
import * as mobilenavbar from '../js/main/mobilenavbar.js';
import * as languagehandler from '../js/main/languagehandler.js';
import * as loading from '../js/main/loading.js';


loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container', false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();

});

window.onhashchange = () => {
  languagehandler.languageContentUpdater();
}

window.onload = () => {
  languagehandler.languageOnLoadUpdater()
};
