import * as mobilenavbar from '../main/mobilenavbar.js';
import * as languagehandler from '../main/languagehandler.js';
import * as loading from '../main/loading.js';
import * as konyvtar from '../main/konyvtar/konyvtar.js';

loading.onReady(function() {
  loading.show('main_container', true);
  loading.show('loading_container', false);
  mobilenavbar.createMobileMenu();
  mobilenavbar.responsiveNavigation();
});

window.onhashchange = () => {
  languagehandler.languageContentUpdater();
};

window.onload = () => {
  languagehandler.languageOnLoadUpdater();
};

document.onscroll = () => {
  mobilenavbar.toggleOnScroll();
};
