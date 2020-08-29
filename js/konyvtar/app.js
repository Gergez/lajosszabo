import * as mobilenavbar from './mobilenavbar.js';
import * as languagehandler from './languagehandler.js';
import * as loading from './loading.js';
import * as konyvtar from './konyvtar/konyvtar.js';

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
