//PRELOAD IMAGES
var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "/kepek/menu/magyar_zaszlo.svg",
  "/kepek/menu/angol_zaszlo.svg",
  "/kepek/menu/nemet_zaszlo.svg",
  "/kepek/menu/francia_zaszlo.svg"
);

//NAVBAR.HTML CONVERTED TO NAVBAR.JS WITH ONLINE CONVERTER http://www.andrewdavidson.com/convert-html-to-javascript/

document.write( '<header class=\"topnav\">\n' );
document.write( '\n' );
document.write( '  <div class=\"mobile_menu\">\n' );
document.write( '    <div class=\"dropdown\">\n' );
document.write( '\n' );
document.write( '      <button><a class=\"iskola_fooldal\" href=\"https://gergez.github.io/lajosszabo/\" id=\"navbar_dialogikus-iskola\">Dialogikus Iskola</a></button>\n' );
document.write( '\n' );
document.write( '      <div class=\"dropdown_content\">\n' );
document.write( '        <!-- JÖN ONCLICK FV. CURRENTPAGE COUNTER SZARRAL -->\n' );
document.write( '        <a href=\"#vadirat\" id=\"navbar_vadirat\">Vádirat</a>\n' );
document.write( '        <a href=\"#alapallas\" id=\"navbar_alapallas\">Alapállás</a>\n' );
document.write( '        <a href=\"#tortenet\" id=\"navbar_tortenet\">Történet</a>\n' );
document.write( '        <a href=\"#harmincas-evek\" id=\"navbar_harmincas-evek\">A \'30-as évek írásai</a>\n' );
document.write( '        <a href=\"#negyvenot-utan\" id=\"navbar_negyvenot-utan\">1945 után</a>\n' );
document.write( '      </div>\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <div class=\"dropdown\">\n' );
document.write( '    <button><a href=\"szabolajos.html\" id=\"navbar_szabo-lajos\">Szabó Lajos</a></button>\n' );
document.write( '\n' );
document.write( '    <div class=\"dropdown_content\">\n' );
document.write( '      <a href=\"./SZL/eletrajz/szabo_lajos_eletrajz.htm\" id=\"navbar_szabo-lajos-eletrajz\">Életrajz</a>\n' );
document.write( '      <a href=\"./SZL/irasok/\" id=\"navbar_szabo-lajos-irasok\">Írások</a>\n' );
document.write( '      <a href=\"./SZL/szeminariumi_eloadasok/\" id=\"navbar_szabo-lajos-szeminariumi-eloadasok\">Szemináriumi előadások</a>\n' );
document.write( '      <a href=\"./SZL/\" id=\"navbar_szabo-lajos-grafikak-kiallitasok\">Grafikák, kiállítások</a>\n' );
document.write( '      <a href=\"./SZL/\" id=\"navbar_szabo-lajos-csutortoki-beszelgetesek\">Csütörtöki beszélgetések</a>\n' );
document.write( '      <a href=\"./SZL/\" id=\"navbar_szabo-lajos-dusseldorfi-beszelgetesek\">Düsseldorfi beszélgetések</a>\n' );
document.write( '      <a href=\"./SZL/\" id=\"navbar_szabo-lajos-konferenciak\">Konferenciák</a>\n' );
document.write( '      <a href=\"./SZL/\" id=\"navbar_szabo-lajos-bibliografia\">Bibliográfia</a>\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <div class=\"dropdown\">\n' );
document.write( '    <button><a href=\"https://gergez.github.io/lajosszabo/taborbela/taborbela.html\" id=\"navbar_tabor-bela\">Tábor Béla</a></button>\n' );
document.write( '\n' );
document.write( '    <div class=\"dropdown_content\">\n' );
document.write( '      <a href=\"./horvathagnes/horvathagnes.html\" id=\"navbar_tabor-bela-eletrajz\">Életrajz</a>\n' );
document.write( '      <a href=\"./suranyilaszlo/suranyilaszlo.html\" id=\"navbar_tabor-bela-konyvek\">Könyvek</a>\n' );
document.write( '      <a href=\"./taboradam/taboradam.html\" id=\"navbar_tabor-bela-ostortenet\">\"Őstörténet\"</a>\n' );
document.write( '      <a href=\"./horvathagnes/horvathagnes.html\" id=\"navbar_tabor-bela-a-szimbolum-valsaga\">A szimbólum válsága</a>\n' );
document.write( '      <a href=\"./suranyilaszlo/suranyilaszlo.html\" id=\"navbar_tabor-bela-preszokratikus-szeminariumok\">Preszókratikus szemináriumok</a>\n' );
document.write( '      <a href=\"./taboradam/taboradam.html\" id=\"navbar_tabor-bela-egyeb-irasok\">Egyéb írások</a>\n' );
document.write( '      <a href=\"./taboradam/taboradam.html\" id=\"navbar_tabor-bela-csutortoki-beszelgetesek\">Csütörtöki beszélgetések</a>\n' );
document.write( '      <a href=\"./horvathagnes/horvathagnes.html\" id=\"navbar_tabor-bela-szaz\">\"Tábor Béla 100\"</a>\n' );
document.write( '      <a href=\"./suranyilaszlo/suranyilaszlo.html\" id=\"navbar_tabor-belarol\">Tábor Béláról</a>\n' );
document.write( '\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <div class=\"dropdown\">\n' );
document.write( '    <button><a href=\"./mandystefania/mandystefania.html\" id=\"navbar_mandy-stefania\">Mándy Stefánia</a></button>\n' );
document.write( '\n' );
document.write( '    <div class=\"dropdown_content\">\n' );
document.write( '      <a href=\"./horvathagnes/horvathagnes.html\" id=\"navbar_mandy-stefania-eletrajz\">Életrajz</a>\n' );
document.write( '      <a href=\"./suranyilaszlo/suranyilaszlo.html\" id=\"navbar_mandy-stefania-a-kes-a-kez-a-hal\">A kés a kéz a hal (részletek)</a>\n' );
document.write( '      <a href=\"./taboradam/taboradam.html\" id=\"navbar_mandy-stefania-az-ellopott-tortenelem\">Az ellopott történelem (részletek)</a>\n' );
document.write( '      <a href=\"./horvathagnes/horvathagnes.html\" id=\"navbar_mandy-stefania-scintilla\">Scintilla (részletek)</a>\n' );
document.write( '      <a href=\"./suranyilaszlo/suranyilaszlo.html\" id=\"navbar_mandy-stefania-kepzomuveszeti-irasok\">Képzőművészeti írások</a>\n' );
document.write( '      <a href=\"./taboradam/taboradam.html\" id=\"navbar_mandy-stefania-mandy-szaz\">Mándy 100</a>\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '\n' );
document.write( '  <div class=\"dropdown\">\n' );
document.write( '    <button class=\"tovabbi_szerzok\"><a id=\"navbar_tovabbi-szerzok\">További szerzők</a></button>\n' );
document.write( '\n' );
document.write( '    <div class=\"dropdown_content\">\n' );
document.write( '      <a href=\"./horvathagnes/horvathagnes.html\" id=\"navbar_horvath-agnes\">Horváth Ágnes</a>\n' );
document.write( '      <a href=\"./suranyilaszlo/suranyilaszlo.html\" id=\"navbar_suranyi-laszlo\">Surányi László</a>\n' );
document.write( '      <a href=\"./taboradam/taboradam.html\" id=\"navbar_tabor-adam\">Tábor Ádám</a>\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <div class=\"dropdown\">\n' );
document.write( '    <button class=\"konyvtar\"><a id=\"navbar_konyvtar\">Könyvtár</a></button>\n' );
document.write( '\n' );
document.write( '    <div class=\"dropdown_content\">\n' );
document.write( '      <a href=\"\" id=\"navbar_irasok\">Írások</a>\n' );
document.write( '      <a href=\"\" id=\"navbar_galeria\">Galéria</a>\n' );
document.write( '      <a href=\"\" id=\"navbar_esemenyek\">Események</a>\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <!-- <form class=\"search_bar_container\">\n' );
document.write( '    <input type=\"text\" class=\"search_bar\" placeholder=\" Keresés...\">\n' );
document.write( '  </form> -->\n' );
document.write( '\n' );
document.write( '  <div class=\"dropdown\">\n' );
document.write( '    <button class=\"language_selector\"><a id=\"lang1\">Magyar</a></button>\n' );
document.write( '    <img class=\"language_flag\" src=\"../kepek/menu/magyar_zaszlo.svg\" alt=\"Magyar nyelv\">\n' );
document.write( '\n' );
document.write( '    <div class=\"dropdown_content\">\n' );
document.write( '      <button class=\"language_selection\" id=\"lang2\">English</button>\n' );
document.write( '      <button class=\"language_selection\" id=\"lang3\">Deutsch</button>\n' );
document.write( '      <button class=\"language_selection\" id=\"lang4\">Français</button>\n' );
document.write( '    </div>\n' );
document.write( '  </div>\n' );
document.write( '</header>\n' );
