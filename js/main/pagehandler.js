


let nextPageButton = document.createElement("BUTTON");
let nextPageImage = document.createElement("IMG");

let currentPage = 0;
let page1 = document.querySelector('.first_page');
let page2 = document.querySelector('.second_page');
let page3 = document.querySelector('.third_page');
let page4 = document.querySelector('.fourth_page');
let page5 = document.querySelector('.fifth_page');
let page6 = document.querySelector('.sixth_page');

let pageArray = [page1, page2, page3, page4, page5, page6];
let pageURLs = ["#magyar_dialogikus_iskola", "#vadirat", "#alapallas", "#tortenet", "#harmincas-evek", "#negyvenot-utan"];

page1.style.zIndex = 100;
page2.style.zIndex = 99;
page3.style.zIndex = 98;
page4.style.zIndex = 97;
page5.style.zIndex = 96;
page6.style.zIndex = 95;

let currentPageZIndex;

// const lang1 = document.querySelector('#lang1');
// const lang2 = document.querySelector('#lang2');
// const lang3 = document.querySelector('#lang3');
// const lang4 = document.querySelector('#lang4');
/*******************SETUP JS RENDERED NEXT PAGE BUTTON AND PREV PAGE BUTTON START****************/
function getCurrentPage(){
  return currentPage;
}

function setUpNextPageButton() {
  document.body.appendChild(nextPageButton);
  nextPageImage.src = "kepek/nyilak/arrow-next.png";
  nextPageButton.className = "arrowButton arrowNext fadein_nostay";
  nextPageButton.style.right = '3%';
  nextPageButton.style.backgroundColor = 'transparent';
  nextPageButton.appendChild(nextPageImage);
}

let previousPageButton = document.createElement("BUTTON");
let previousPageImage = document.createElement("IMG");

function setUpPreviousPageButton() {
  document.body.appendChild(previousPageButton);
  previousPageImage.src = "kepek/nyilak/arrow-prev.png";
  previousPageButton.className = "arrowButton arrowPrev";
  previousPageButton.appendChild(previousPageImage);
  previousPageButton.style.left = '3%';
  previousPageButton.style.backgroundColor = 'transparent';
  previousPageButton.style.opacity = 0;
  previousPageButton.style.pointerEvents = 'none';
}

/*******************SETUP JS RENDERED NEXT PAGE BUTTON AND PREV PAGE BUTTON END****************/

/************************* ANIMATE BETWEEN PAGES START **************************/

function pageTransition (button) {
  if(button == "nextPage"){
    pageArray[currentPage + 1].classList.toggle('fadein');
    pageArray[currentPage].classList.toggle('fadein');
  }
  else if(button == "prevPage"){
    pageArray[currentPage].classList.toggle('fadein');
    pageArray[currentPage - 1].classList.toggle('fadein');
  }
}

/*************************  ANIMATE BETWEEN PAGES END **********************/

function currentPageHandler() {
  for (let i = 0; i < pageArray.length; i++) {
    if (currentPage == i) {
      pageArray[i].style.display = 'block';
    } else {
      pageArray[i].style.display = 'none';
    }
  }
}

/*******************************PREV AND NEXT PAGE HANDLERS START***********************/

function goToNextPage() {

  currentPageZIndex = pageArray[currentPage].style.zIndex;

  if (currentPage != 5) {
    pageArray[currentPage].style.zIndex = pageArray[currentPage + 1].style.zIndex;
    pageArray[currentPage + 1].style.zIndex = currentPageZIndex;
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
  pageTransition("nextPage");
  currentPage += 1;
  currentPageHandler();
  scrollToTop();
}

function goToPreviousPage() {

  // Save the current index in a temporary variable.
  currentPageZIndex = pageArray[currentPage].style.zIndex;

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
  pageTransition("prevPage");
  currentPage -= 1;
  currentPageHandler();
  scrollToTop();
}


/*************PREV AND NEXT PAGE HANDLERS END************/

/*CORRECTS URL FOR WHEN THE JS RENDERED BUTTONS ARE CLICKED*/

function setURL(){
let cur_location = location.hash;
let langTag = checkLanguageTag();

location.hash = `${pageURLs[currentPage]}${langTag}`;
cur_location = "";
}

nextPageButton.addEventListener('click', goToNextPage);
nextPageButton.addEventListener('click', setURL);
previousPageButton.addEventListener('click', goToPreviousPage);
previousPageButton.addEventListener('click', setURL);


/*MAKE ARROWS DISAPPEAR ON SCROLL DOWN AND APPEAR ON SCROLL UP*/

let prevScrollpos = window.pageYOffset;
function togglePagingArrow(){
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if(currentPage != 5){
      document.getElementsByClassName("arrowButton")[0].style.opacity = "1";
      document.getElementsByClassName("arrowButton")[0].style.pointerEvents = "auto";
      }
    if(currentPage != 0){
      document.getElementsByClassName("arrowButton")[1].style.opacity = "1";
      document.getElementsByClassName("arrowButton")[1].style.pointerEvents = "auto";
    }
  } else{
    document.getElementsByClassName("arrowButton")[0].style.opacity = "0";
    document.getElementsByClassName("arrowButton")[0].style.pointerEvents = "none";
    document.getElementsByClassName("arrowButton")[1].style.opacity = "0";
    document.getElementsByClassName("arrowButton")[1].style.pointerEvents = "none";
  }
  prevScrollpos = currentScrollPos;
}

/*MAKES IT POSSIBLE TO SWITCH PAGES WITH KEYBOARD*/

function keyboardPager() {
  if(event.key == "ArrowRight" && currentPage != 5){
    nextPageButton.click();
  }else if(event.key == "ArrowLeft" && currentPage != 0){
    previousPageButton.click();
  }
}

/************** PAGE TURNER START **************/



// SET THE CURRENTPAGE VARIABLE ACCORDING TO HASH. CALL NEXT PAGE OR PREV PAGE
// AS MANY TIMES AS NEEDED ACCORDING TO CURRENTPAGE AND DESIRED PAGE DIFFERENCE.
//
function checkLanguageTag(){
  let languageTag;
  let locationURL = location.hash;
  if(locationURL.includes("#hu")){
    languageTag = "#hu";
  }else if(locationURL.includes("#en")){
    languageTag = "#en";
  }else if(locationURL.includes("#de")){
    languageTag = "#de";
  }else if(locationURL.includes("#fr")){
    languageTag = "#fr";
  }else{
    languageTag = "";
  }
  return languageTag;
}


function scrollToTop(){
  window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
  });
}

function setCurrentPage() {

  let currentLocation = location.hash;
  let languageTag = checkLanguageTag();

  if(currentLocation == "" || currentLocation == "#" || currentLocation.includes("#magyar_dialogikus_iskola")){
    currentPage = 0;
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#vadirat")){
    currentPage = 1;
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#alapallas")){
    currentPage = 2;
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#tortenet")){
    currentPage = 3;
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#harmincas_evek")){
    currentPage = 4;
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#negyvenot_utan")){
    currentPage = 5;
    goToPreviousPage();
    goToNextPage();
    scrollToTop();
  }

}

// function navbarButtonsAddHash(){
//
// let navLink = document.querySelector(".topnav .dropdown .dropdown_content");
// let navLinkAnchors = navLink.querySelectorAll("a");
//   for(let i = 0; i < navLinkAnchors.length; i++){
//     navLinkAnchors[i].addEventListener('click', () => {
//       setTimeout(lang1.click(), 100);
//       scrollToTop();
//     });
//   }
// }
// navbarButtonsAddHash();

/************** PAGE TURNER END **************/

export {
  setUpNextPageButton,
  setUpPreviousPageButton,
  goToPreviousPage,
  goToNextPage,
  currentPageHandler,
  setURL,
  togglePagingArrow,
  setCurrentPage,
  keyboardPager
}
