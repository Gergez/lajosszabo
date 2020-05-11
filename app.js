
/************** PAGE TURNER START **************/

let nextPageButton = document.createElement("BUTTON");
    nextPageButton.className = "arrowButton";
let nextPageImage = document.createElement("IMG");

function setUpNextPageButton () {
  document.body.appendChild(nextPageButton);
  nextPageImage.src = "kepek/nyilak/arrow-next.png";
  nextPageButton.appendChild(nextPageImage);
  nextPageButton.style.position = 'fixed';
  nextPageButton.style.backgroundColor = 'transparent';
  nextPageButton.style.boxShadow = 'none';
  nextPageButton.style.top = '50%';
  nextPageButton.style.right = '3%';
  nextPageButton.style.zIndex = 200;
  nextPageButton.style.borderRadius = '10px';

}



/* class Pagingbutton{

  constructor(posX, posY, ) {
      document.body.appendChild(this);
      this.className = "arrowButton";
      this.style.position = 'fixed';
      this.style.backgroundColor = 'transparent';
      this.style.boxShadow = 'none';
      this.style.top = 'posY';
      this.style.right = 'posX';
      this.style.zIndex = 200;
      this.style.borderRadius = '10px';
  }

  Mover(top, left, bottom, right) {
    this.style.top = top || this.style.top;
    this.style.left = left || this.style.left;
    this.style.bottom = bottom || this.style.bottom;
    this.style.right = right || this.style.right;
  }

  currentPageHandler() {
      let currentPageIndex = 0;

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
  }
} */

// prevPageButton = new Pagingbutton('50%', '50px');



let previousPageButton = document.createElement("BUTTON");
    previousPageButton.className = "arrowButton";
let previousPageImage = document.createElement("IMG");

function setUpPreviousPageButton () {
  document.body.appendChild(previousPageButton);
  previousPageImage.src = "kepek/nyilak/arrow-prev.png";
  previousPageButton.appendChild(previousPageImage);
  previousPageButton.style.position = 'fixed';
  previousPageButton.style.backgroundColor = 'transparent';
  previousPageButton.style.top = '50%';
  previousPageButton.style.left = '3%';
  previousPageButton.style.zIndex = 200;
  previousPageButton.style.borderRadius = '10px';
  previousPageButton.style.opacity = 0;
  previousPageButton.style.pointerEvents = 'none';
}



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

function goToNextPage() {

    //Declare the pages array.
      let pageArray = [page1,page2,page3,page4,page5,page6];
    // Save the current index in a temporary variable.
      let currentPageZIndex = pageArray[currentPage].style.zIndex;

  if(currentPage != 5){
    //Swap the indexes of the current and the following pages.
      pageArray[currentPage].style.zIndex = pageArray[currentPage + 1].style.zIndex;
      pageArray[currentPage + 1].style.zIndex = currentPageZIndex;

    //Always set the button's opacity to 1. Except if its the last page.
  }

  if(currentPage == 4){
    nextPageButton.style.opacity = 0;
    nextPageButton.style.pointerEvents = 'none';
    previousPageButton.style.opacity = 1.0;
    previousPageButton.style.pointerEvents = 'auto';
  }

  else{
    nextPageButton.style.opacity = 1.0;
    previousPageButton.style.opacity = 1.0;
    nextPageButton.style.pointerEvents = 'auto';
    previousPageButton.style.pointerEvents = 'auto';
  }
  currentPage += 1;
  currentPageHandler();
}

function goToPreviousPage() {

    //Declare the pages array.
      let pageArray = [page1,page2,page3,page4,page5,page6];
    // Save the current index in a temporary variable.
      let currentPageZIndex = pageArray[currentPage].style.zIndex;

  if(currentPage != 0){
    //Swap the indexes of the current and the previous pages.
      pageArray[currentPage].style.zIndex = pageArray[currentPage - 1].style.zIndex;
      pageArray[currentPage - 1].style.zIndex = currentPageZIndex;


    //Always set the button's opacity to 1. Except if its the last page.
      previousPageButton.style.opacity = 1.0;
  }

  if(currentPage == 1){
    previousPageButton.style.opacity = 0;
    nextPageButton.style.opacity = 1.0;
    previousPageButton.style.pointerEvents = 'none';
    nextPageButton.style.pointerEvents = 'auto';
  }

  else{
    previousPageButton.style.opacity = 1.0;
    nextPageButton.style.opacity = 1.0;
    previousPageButton.style.pointerEvents = 'auto';
    nextPageButton.style.pointerEvents = 'auto';
  }
  currentPage -= 1;
  currentPageHandler();
}

nextPageButton.addEventListener('click', goToNextPage);
previousPageButton.addEventListener('click', goToPreviousPage);

/************** PAGE TURNER END **************/


/****************** MOBILE NAVBAR ********************/

let cancelButton = document.createElement('BUTTON');
let burgerButton = document.createElement('BUTTON');

 function createMobileMenu(){
    document.body.appendChild(cancelButton);
    cancelButton.classList.add('cancel_button');
    cancelButton.innerHTML = '<img src="https://img.icons8.com/pastel-glyph/64/000000/cancel.png"/>';

    document.body.appendChild(burgerButton);
    burgerButton.innerHTML = '<img src="https://img.icons8.com/windows/64/000000/menu.png"/>';
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

 function currentPageHandler () {

 let pageArray = [page1,page2,page3,page4,page5,page6];
   for(let i = 0; i < 4; i++){
     if(currentPage == i){
       pageArray[i].style.display = 'block';
     }
     else {
       pageArray[i].style.display = 'none';
     }
   }
 }

 function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementsByClassName('topnav')[0].style.display = 'none';
    cancelButton.style.display = 'none';
    burgerButton.style.display = 'block';
  } else {
    document.getElementsByClassName('topnav')[0].style.display = 'flex';
  }
}

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/******** LOADING SCREEN **********/

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            // callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('main_container', true);
    show('loading_container', false);
    setUpNextPageButton();
    setUpPreviousPageButton();
    createMobileMenu();
    responsiveNavigation();
    currentPageHandler();
});

/***************** FUNCTION CALLS ********************/
