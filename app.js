/************** PAGE TURNER START **************/

let nextPageButton = document.createElement("BUTTON");
let nextPageImage = document.createElement("IMG");

let currentPage = 0;
let page1 = document.querySelector('.first_page');
let page2 = document.querySelector('.second_page');
let page3 = document.querySelector('.third_page');
let page4 = document.querySelector('.fourth_page');
let page5 = document.querySelector('.fifth_page');
let page6 = document.querySelector('.sixth_page');

page1.style.zIndex = 100;
page2.style.zIndex = 99;
page3.style.zIndex = 98;
page4.style.zIndex = 97;
page5.style.zIndex = 96;
page6.style.zIndex = 95;

const iskolaFooldal = document.getElementById('dialogikus-iskola');
const vadirat = document.getElementById('vadirat');
const alapallas = document.getElementById('alapallas');
const tortenet = document.getElementById('tortenet');
const harmincasEvek = document.getElementById('harmincas-evek');
const negyvenotUtan = document.getElementById('negyvenot-utan');

function setUpNextPageButton() {
  document.body.appendChild(nextPageButton);
  nextPageImage.src = "kepek/nyilak/arrow-next.png";
  nextPageButton.className = "arrowButton";
  nextPageButton.style.right = '3%';
  nextPageButton.style.backgroundColor = 'transparent';
  nextPageButton.appendChild(nextPageImage);


}

let previousPageButton = document.createElement("BUTTON");
let previousPageImage = document.createElement("IMG");

function setUpPreviousPageButton() {
  document.body.appendChild(previousPageButton);
  previousPageImage.src = "kepek/nyilak/arrow-prev.png";
  previousPageButton.className = "arrowButton";
  previousPageButton.appendChild(previousPageImage);
  previousPageButton.style.left = '3%';
  previousPageButton.style.backgroundColor = 'transparent';
  previousPageButton.style.opacity = 0;
  previousPageButton.style.pointerEvents = 'none';
}

iskolaFooldal.addEventListener('click', () => {
  currentPage = 0;
  let pageArray = [page1, page2, page3, page4, page5, page6];
  let currentPageZIndex = pageArray[currentPage].style.zIndex;
});

var allPages = document.querySelectorAll('section');
// function pageTransition(currentPage){
//
//   function animate(elem, increment, endOpacity) {
//       if(elem.style.opacity === endOpacity) {
//         clearInterval(id);
//       }
//       else{
//         elem.style.opacity += increment;
//       }
//     }
//
//     var id = setInterval(animate, 100);
//     animate(allPages[currentPage], 0.01, 1);
//     animate(allPages[currentPage-1], -0.01, 0);
//
//   }



// allPages[1].style.opacity = 0;
function pageTransition() {

  // for(let i = 0; i < allPages.length; i++){
  //   if(i !== currentPage){
  //     allPages[i].style.opacity = 0;
  //   }
  // }

  var currentOpacity = 1;
  var followingOpacity = 0;
  function animate(){

        if(allPages[currentPage-1].style.opacity > -0.01){
          currentOpacity -= 0.01;
          allPages[currentPage-1].style.opacity = currentOpacity;
          // setTimeout(() => {
          //   followingOpacity += 0.01;
          //   allPages[currentPage].style.opacity = followingOpacity;
          //   console.log("fasz");
          // }, 1000)

        }
        else{
          clearInterval(id);
        }

  }

  var id = setInterval(animate, 10);

}

function goToNextPage() {

  //Declare the pages array.
  let pageArray = [page1, page2, page3, page4, page5, page6];
  // Save the current index in a temporary variable.
  let currentPageZIndex = pageArray[currentPage].style.zIndex;

  if (currentPage != 5) {
    //Swap the indexes of the current and the following pages.
    pageArray[currentPage].style.zIndex = pageArray[currentPage + 1].style.zIndex;
    pageArray[currentPage + 1].style.zIndex = currentPageZIndex;
    //Always set the button's opacity to 1. Except if its the last page.
  }

  if (currentPage == 4) {
    nextPageButton.style.opacity = 0;
    nextPageButton.style.pointerEvents = 'none';
    previousPageButton.style.opacity = 1.0;
    previousPageButton.style.pointerEvents = 'auto';
  } else {
    nextPageButton.style.opacity = 1.0;
    previousPageButton.style.opacity = 1.0;
    nextPageButton.style.pointerEvents = 'auto';
    previousPageButton.style.pointerEvents = 'auto';
  }
  // pageTransition();
  currentPage += 1;
  currentPageHandler();

}

function goToPreviousPage() {

  //Declare the pages array.
  let pageArray = [page1, page2, page3, page4, page5, page6];
  // Save the current index in a temporary variable.
  let currentPageZIndex = pageArray[currentPage].style.zIndex;

  if (currentPage != 0) {
    //Swap the indexes of the current and the previous pages.
    pageArray[currentPage].style.zIndex = pageArray[currentPage - 1].style.zIndex;
    pageArray[currentPage - 1].style.zIndex = currentPageZIndex;


    //Always set the button's opacity to 1. Except if its the last page.
    previousPageButton.style.opacity = 1.0;
  }

  if (currentPage == 1) {
    previousPageButton.style.opacity = 0;
    nextPageButton.style.opacity = 1.0;
    previousPageButton.style.pointerEvents = 'none';
    nextPageButton.style.pointerEvents = 'auto';
  } else {
    previousPageButton.style.opacity = 1.0;
    nextPageButton.style.opacity = 1.0;
    previousPageButton.style.pointerEvents = 'auto';
    nextPageButton.style.pointerEvents = 'auto';
  }
  // pageTransition();
  currentPage -= 1;
  currentPageHandler();
}

nextPageButton.addEventListener('click', goToNextPage);
previousPageButton.addEventListener('click', goToPreviousPage);

/************** PAGE TURNER END **************/


/****************** MOBILE NAVBAR ********************/

let cancelButton = document.createElement('BUTTON');
let burgerButton = document.createElement('BUTTON');

function createMobileMenu() {
  document.body.appendChild(cancelButton);
  cancelButton.classList.add('cancel_button');
  cancelButton.innerHTML = '<img src="kepek/menu/cancel.png" alt="menu-cancel"/>';

  document.body.appendChild(burgerButton);
  burgerButton.innerHTML = '<img src="kepek/menu/menu.png" alt="menu_button"/>';
  burgerButton.classList.add('burger_menu');
}

function responsiveNavigation() {
  cancelButton.addEventListener('click', () => {
    document.getElementsByClassName('topnav')[0].style.display = 'none';
    cancelButton.style.display = 'none';
    burgerButton.style.display = 'block';
  });

  burgerButton.addEventListener('click', () => {
    document.getElementsByClassName('topnav')[0].style.display = 'block';
    cancelButton.style.display = 'block';
    burgerButton.style.display = 'none';
  });
}

function currentPageHandler() {

  let pageArray = [page1, page2, page3, page4, page5, page6];
  for (let i = 0; i < 4; i++) {
    if (currentPage == i) {
      pageArray[i].style.display = 'block';
    } else {
      pageArray[i].style.display = 'none';
    }
  }
}

function mediaFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementsByClassName('topnav')[0].style.display = 'none';
    cancelButton.style.display = 'none';
    burgerButton.style.display = 'block';

    // Kérdés, hogy ezzel mi lesz még. Amikor bemegyek a menübe, eltüntetem az összeset, és ha kimegyek, akkor vissza
    // var allElements = document.getElementsByTagName('*');
    // for(let i=0; i<allElements.length; i++){
    //   allElements[i].classList.add('display_none');
    // }

  } else {
    // for(let i=0; i<allElements.length; i++){
    //   allElements[i].classList.remove('display_none');
    // }
    document.getElementsByClassName('topnav')[0].style.display = 'flex';
  }
}

var x = window.matchMedia("(max-width: 1200px)")
mediaFunction(x) // Call listener function at run time
x.addListener(mediaFunction) // Attach listener function on state changes

/******** LOADING SCREEN **********/

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

onReady(function() {
  show('main_container', true);
  show('loading_container', false);
  setUpNextPageButton();
  setUpPreviousPageButton();
  createMobileMenu();
  responsiveNavigation();
  currentPageHandler();
});



/***************** FUNCTION CALLS ********************/

var language_translations = language;
var keys = Object.keys(language_translations.hu);
var hu_values = Object.values(language_translations.hu);
var en_values = Object.values(language_translations.en);
var de_values = Object.values(language_translations.de);
var fr_values = Object.values(language_translations.fr);



function languageContentUpdater() {
  if (location.hash === "#en") {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}` )) {
        document.querySelector(`#${keys[i]}`).textContent = `${en_values[i]}`;
        // document.querySelector(`#${keys[i]}`).innerHTML += "lang='en'";
      }
    }
  } else if (location.hash === "#hu") {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${hu_values[i]}`;
      }
    }
  } else if (location.hash === "#de") {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${de_values[i]}`;
      }
    }
  } else if (location.hash === "#fr") {
    for (let i = 0; i < keys.length; i++) {
      if (document.querySelector(`#${keys[i]}`)) {
        document.querySelector(`#${keys[i]}`).textContent = `${fr_values[i]}`;
      }
    }
  }

};

const lang1 = document.querySelector('#lang1');
const lang3 = document.querySelector('#lang3');
const lang2 = document.querySelector('#lang2');
const lang4 = document.querySelector('#lang4');

function languageChanger(lang) {
// console.log(lang.textContent);
// const currentURL = location.href;
const img = document.querySelector('.language_flag');
const search_bar = document.querySelector('.search_bar');

    switch (lang.textContent) {
      case "Magyar":
        // location.href = currentURL;
        location.href = ("#hu");
        img.src = "kepek/menu/magyar_zaszlo.svg";
        img.alt = "Magyar nyelv";
        search_bar.placeholder = " Keresés...";
        break;

      case "English":
        // location.href = currentURL;
        location.href = ("#en");
        img.src = "kepek/menu/angol_zaszlo.svg";
        img.alt = "English language";
        search_bar.placeholder = " Search...";
        break;

      case "Deutsch":
        // location.href = currentURL;
        location.href = ("#de");
        img.src = "kepek/menu/nemet_zaszlo.svg";
        img.alt = "Deutsche Sprache";
        search_bar.placeholder = " Suche...";
        break;

      case "Français":
        // location.href = currentURL;
        location.href = ("#fr");
        img.src = "kepek/menu/francia_zaszlo.svg";
        img.alt = "Langue Française";
        search_bar.placeholder = " Chercher...";
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
  switch(current_location){
    case "#hu" :
    languageChanger(lang1);
    break;
    case "#en" :
    languageChanger(lang2);
    break;
    case "#de" :
    languageChanger(lang3);
    break;
    case "#fr" :
    languageChanger(lang4);
    break;
  }

};
window.onhashchange = languageContentUpdater;
