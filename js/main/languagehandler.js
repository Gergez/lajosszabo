
/**
// This script handles the content change based on language selection.
// It also fires if for whatever reason the url is concatenated with hu en de fr
**/

/*Language json files. FOOTER STILL NEEDED*/
const navbar_translations = navbar_language;
const content_translations = language;

const navbar_links = navbar_link;
const main_links = main_link;

/*Array with all the language files*/
let language_translationsAll = [];

/*Files get loaded with */
function fileLoader(file){
  language_translationsAll.push(file);
  return language_translationsAll;
}

fileLoader(navbar_language);
fileLoader(language);
fileLoader(navbar_link);
fileLoader(main_link);

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
          document.querySelector(`#${keys[i]}`).innerHTML = `${en_values[i]}`;
        }
      }
    } else if (location.hash.includes("#hu")) {
      for (let i = 0; i < keys.length; i++) {
        if (document.querySelector(`#${keys[i]}`)) {
          document.querySelector(`#${keys[i]}`).innerHTML = `${hu_values[i]}`;
        }
      }
    } else if (location.hash.includes("#de")) {
      for (let i = 0; i < keys.length; i++) {
        if (document.querySelector(`#${keys[i]}`)) {
          document.querySelector(`#${keys[i]}`).innerHTML = `${de_values[i]}`;
        }
      }
    } else if (location.hash.includes("#fr")) {
      for (let i = 0; i < keys.length; i++) {
        if (document.querySelector(`#${keys[i]}`)) {
          document.querySelector(`#${keys[i]}`).innerHTML = `${fr_values[i]}`;
        }
      }
    }
  }

// languageLinkUpdater();

};

/*The 4 main languages*/
const lang1 = document.querySelector('#lang1');
const lang2 = document.querySelector('#lang2');
const lang3 = document.querySelector('#lang3');
const lang4 = document.querySelector('#lang4');

/*This function changes the img sources to the appropriate flag based on URL*/
function imgChanger(lang) {
  const img = document.querySelector('.language_flag');
  let current_location = location.href;
  let filtered_current_location = current_location.replace(/#hu|#en|#de|#fr/, "");

  switch (lang.textContent) {
    case "Magyar":
      location.href = (`${filtered_current_location}#hu`);
      img.src = "../kepek/menu/magyar_zaszlo.svg";
      img.alt = "Magyar nyelv";
      break;

    case "English":
      location.href = (`${filtered_current_location}#en`);
      img.src = "../kepek/menu/angol_zaszlo.svg";
      img.alt = "English language";
      break;

    case "Deutsch":
      location.href = (`${filtered_current_location}#de`);
      img.src = "../kepek/menu/nemet_zaszlo.svg";
      img.alt = "Deutsche Sprache";
      break;

    case "Français":
      location.href = (`${filtered_current_location}#fr`);
      img.src = "../kepek/menu/francia_zaszlo.svg";
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

function languageOnLoadUpdater(){
  let current_location = location.hash;
  location.hash = '';
  location.hash = current_location;

  if(current_location.includes("#hu")){
    imgChanger(lang1);
  }else if(current_location.includes("#en")){
    imgChanger(lang2);
  }else if(current_location.includes("#de")){
    imgChanger(lang3);
  }else if(current_location.includes("#fr")){
    imgChanger(lang4);
  }
}
/**
// Everything happens based on hashchange
**/

export {
  languageContentUpdater,
  imgChanger,
  languageOnLoadUpdater
};
