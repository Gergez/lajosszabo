
/**
// This script handles the content change based on language selection.
// It also fires if for whatever reason the url is concatenated with hu en de fr
**/

/*Language json files. FOOTER STILL NEEDED*/
let navbar_translations = navbar_language;
let content_translations = language;

/*Array with all the language files*/
let language_translationsAll = [];

/*Files get loaded with */
function fileLoader(file){
  language_translationsAll.push(file);
  return language_translationsAll;
}

fileLoader(navbar_language);
fileLoader(language);

/*This function changes all the main content's textContent based on id.
It doesn't change the img sources or link sources.*/
function languageContentUpdater() {

for(let i = 0; i < language_translationsAll.length; i++){

     let keys = Object.keys(language_translationsAll[i].hu);
     let hu_values = Object.values(language_translationsAll[i].hu);
     let en_values = Object.values(language_translationsAll[i].en);
     let de_values = Object.values(language_translationsAll[i].de);
     let fr_values = Object.values(language_translationsAll[i].fr);


    if (location.hash.includes("#en")) {
      for (let i = 0; i < keys.length; i++) {
        if (document.querySelector(`#${keys[i]}`)) {
          document.querySelector(`#${keys[i]}`).textContent = `${en_values[i]}`;
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
  }
};

/*The 4 main languages*/
const lang1 = document.querySelector('#lang1');
const lang2 = document.querySelector('#lang2');
const lang3 = document.querySelector('#lang3');
const lang4 = document.querySelector('#lang4');

/*This function changes the img sources to the appropriate flag based on URL*/
function imgChanger(lang) {
  const img = document.querySelector('.language_flag');

  switch (lang.textContent) {
    case "Magyar":
      location.href = ("#hu");
      img.src = "kepek/menu/magyar_zaszlo.svg";
      img.alt = "Magyar nyelv";
      break;

    case "English":
      location.href = ("#en");
      img.src = "kepek/menu/angol_zaszlo.svg";
      img.alt = "English language";
      break;

    case "Deutsch":
      location.href = ("#de");
      img.src = "kepek/menu/nemet_zaszlo.svg";
      img.alt = "Deutsche Sprache";
      break;

    case "Français":
      location.href = ("#fr");
      img.src = "kepek/menu/francia_zaszlo.svg";
      img.alt = "Langue Française";
      break;
  }
}

lang1.addEventListener('click', () => {
  imgChanger(lang1);
});
lang2.addEventListener('click', () => {
  imgChanger(lang2);
});
lang3.addEventListener('click', () => {
  imgChanger(lang3);
});
lang4.addEventListener('click', () => {
  imgChanger(lang4);
});

/*It's there so if the page is linked, it will update to the correct language*/
window.onload = () => {
  let current_location = location.hash;
  location.hash = '';
  location.hash = current_location;
  switch (current_location) {
    case "#hu":
      imgChanger(lang1);
      break;
    case "#en":
      imgChanger(lang2);
      break;
    case "#de":
      imgChanger(lang3);
      break;
    case "#fr":
      imgChanger(lang4);
      break;
  }

};

/**
// This does it all. Everything happens based on hashchange
**/

window.onhashchange = languageContentUpdater;

export {
  languageContentUpdater,
  imgChanger
};
