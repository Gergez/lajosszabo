let language_translations = language;

// function languageFileHandler(languageFile){
//     language_translations = languageFile;
//     return language_translations;
// }
//
//
//
// function languageSetter(){
//   languageFileHandler(language);
// }

/*function fileHandler(file){

}
*/
  let keys = Object.keys(language_translations.hu);
  let hu_values = Object.values(language_translations.hu);
  let en_values = Object.values(language_translations.en);
  let de_values = Object.values(language_translations.de);
  let fr_values = Object.values(language_translations.fr);

function languageContentUpdater() {

  if (location.hash.includes("#en")) {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${en_values[i]}`;
        // document.querySelector(`#${keys[i]}`).innerHTML += "lang='en'";
      }
    }
  } else if (location.hash.includes("#hu")) {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${hu_values[i]}`;
      }
    }
  } else if (location.hash.includes("#de")) {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${de_values[i]}`;
      }
    }
  } else if (location.hash.includes("#fr")) {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${fr_values[i]}`;
      }
    }
  }
};

const lang1 = document.querySelector('#lang1');
const lang2 = document.querySelector('#lang2');
const lang3 = document.querySelector('#lang3');
const lang4 = document.querySelector('#lang4');

function languageChanger(lang) {
  // console.log(lang.textContent);
  // const currentURL = location.href;
  const img = document.querySelector('.language_flag');
  // const search_bar = document.querySelector('.search_bar');

  switch (lang.textContent) {
    case "Magyar":
      location.href = ("#hu");
      img.src = "kepek/menu/magyar_zaszlo.svg";
      img.alt = "Magyar nyelv";
      // search_bar.placeholder = " Keresés...";
      break;

    case "English":
      location.href = ("#en");
      img.src = "kepek/menu/angol_zaszlo.svg";
      img.alt = "English language";
      // search_bar.placeholder = " Search...";
      break;

    case "Deutsch":
      location.href = ("#de");
      img.src = "kepek/menu/nemet_zaszlo.svg";
      img.alt = "Deutsche Sprache";
      // search_bar.placeholder = " Suche...";
      break;

    case "Français":
      location.href = ("#fr");
      img.src = "kepek/menu/francia_zaszlo.svg";
      img.alt = "Langue Française";
      // search_bar.placeholder = " Chercher...";
      break;
  }
}

lang1.addEventListener('click', () => {
  languageChanger(lang1);
});
lang2.addEventListener('click', () => {
  languageChanger(lang2);
});
lang3.addEventListener('click', () => {
  languageChanger(lang3);
});
lang4.addEventListener('click', () => {
  languageChanger(lang4);
});

window.onload = () => {
  let current_location = location.hash;
  location.hash = '';
  location.hash = current_location;
  switch (current_location) {
    case "#hu":
      languageChanger(lang1);
      break;
    case "#en":
      languageChanger(lang2);
      break;
    case "#de":
      languageChanger(lang3);
      break;
    case "#fr":
      languageChanger(lang4);
      break;
  }

};
window.onhashchange = languageContentUpdater;

export {
  languageContentUpdater,
  languageChanger
};
