


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

function currentPageHandler() {
  for (let i = 0; i < pageArray.length; i++) {
    if (currentPage == i) {
      pageArray[i].style.display = 'block';
    } else {
      pageArray[i].style.display = 'none';
    }
  }


// DEFINE AN ARRAY CONTAINING URLS FOR THE CORRESPONDING CURRENT PAGES
// CHECK FOR CURRENT PAGE'S URL.
// CONCATANE A LANG TAG ACCORDING TO THE CURRENT LANGUAGE.

/*
LOCATION.HASH = PAGEURLS[CURRENTPAGE] + LANGUAGE TAG



*/
// let languageTag = checkLanguageTag();
// location.hash = `${pageURLs[currentPage]}${languageTag}`

}

function URLHandler(){
let cur_location = location.hash;
let langTag = checkLanguageTag();
location.hash = `${pageURLs[currentPage]}${langTag}`;

  if(cur_location.includes("#hu")){
    location.hash = `${pageURLs[currentPage]}#hu`;
    console.log("It is hungarian");
  }else if(cur_location.includes("#en")){
    location.hash = `${pageURLs[currentPage]}#en`;
    console.log("It is english");
  }else if(cur_location.includes("#de")){
    location.hash = `${pageURLs[currentPage]}#de`;
    console.log("It is german");
  }else if(cur_location.includes("#fr")){
    location.hash = `${pageURLs[currentPage]}#fr`;
    console.log("It is french");
  }else{
    location.hash = `${pageURLs[currentPage]}`;
    console.log("It is basic");
  }
  cur_location = "";
  return location.hash;
}

nextPageButton.addEventListener('click', goToNextPage);
previousPageButton.addEventListener('click', goToPreviousPage);


/* TERVEK A NAVBAR LINKELÉSHEZ

1. GET THE CURRENT PAGE INDEX
2. GET THE DIFFERENCE OF THE CURRENT PAGE AND THE PAGE WE ARE NAVIGATED TO WITH +/-
3. CALL THE goToNextPage OR goToPreviousPage FUNCTION THAT MANY TIMES.
4. ??? PROFIT


1.

*/

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

function keyboardPager() {
  if(event.key == "ArrowRight" && currentPage != 5){
    goToNextPage();
  }else if(event.key == "ArrowLeft" && currentPage != 0){
    goToPreviousPage();
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

  console.log("inside setCurrentPage");
  let currentLocation = location.hash;
  console.log(currentLocation);
  let languageTag = checkLanguageTag();

  if(currentLocation == "" || currentLocation == "#" || currentLocation.includes("#magyar_dialogikus_iskola")){
    currentPage = 0;
    console.log("Current Page = " + currentPage);
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#vadirat")){
    currentPage = 1;
    console.log("Current Page = " + currentPage);
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#alapallas")){
    currentPage = 2;
    console.log("Current Page = " + currentPage);
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#tortenet")){
    currentPage = 3;
    console.log("Current Page = " + currentPage);
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#harmincas-evek")){
    currentPage = 4;
    console.log("Current Page = " + currentPage);
    goToNextPage();
    goToPreviousPage();
    scrollToTop();
  }else if(currentLocation.includes("#negyvenot-utan")){
    currentPage = 5;
    console.log("Current Page = " + currentPage);
    goToPreviousPage();
    goToNextPage();
    scrollToTop();
  }

  // location.hash = `${pageURLs[currentPage]}${checkLanguageTag()}`;
  // location.hash = URLHandler();
}

function whatever(){

let navLink = document.querySelector(".topnav .dropdown .dropdown_content");
let navLinkAnchors = navLink.querySelectorAll("a");

  for(let i = 0; i < navLinkAnchors.length; i++){
    navLinkAnchors[i].addEventListener('click', () => {
      location.hash = `${pageURLs[currentPage]}${checkLanguageTag()}`;
      console.log(navLinkAnchors[i]);
    });
  }
}
//
whatever();

// function dostuff(){
//   let navLink = document.querySelector(".topnav .dropdown .dropdown_content");
//   let navLinkAnchors = navLink.querySelectorAll("a");
//
//   for(let i = 0; i < navLinkAnchors.length; i++){
//     navLinkAnchors[i].addEventListener('click', () => {
//       location.hash = `${pageURLs[currentPage]}${checkLanguageTag()}`;
//     });
//   }
// }
/************** PAGE TURNER END **************/

export {
  setUpNextPageButton,
  setUpPreviousPageButton,
  goToPreviousPage,
  goToNextPage,
  currentPageHandler,
  setCurrentPage,
  keyboardPager,
  togglePagingArrow
}
