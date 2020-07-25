
/************** PAGE TURNER START **************/


/**
// SET THE CURRENTPAGE VARIABLE ACCORDING TO HASH. CALL NEXT PAGE OR PREV PAGE
// AS MANY TIMES AS NEEDED ACCORDING TO CURRENTPAGE AND DESIRED PAGE DIFFERENCE.
//

function setCurrentPage() {
  let currentLocation = location.hash;

  if(currentLocation == ("")){
    currentPage = 0;
  }else if(currentLocation.includes("#vadirat")){
    currentPage = 1;
  }else if(currentLocation.includes("#alapallas")){
    currentPage = 2;
  }else if(currentLocation.includes("#tortenet")){
    currentPage = 3;
  }else if(currentLocation.includes("#harmincas-evek")){
    currentPage = 4;
  }else if(currentLocation.includes("##negyvenot-utan")){
    currentPage = 5;
  }
}


 window.onload = () => {

  let current_location = location.hash;

  switch (current_location) {
    case "#vadirat":

      break;
    default:

  }
}

 function clickNavigation() {
   let navigation = document.querySelector('.topnav .dropdown .dropdown_content');
   let dropdown_content = navigation.children;
   dropdown_content.forEach((child) => {
     child.addEventListener('click', () => {

     })
   });

 }

//
//
//
//
//
**/




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
  nextPageButton.className = "arrowButton fadein_nostay";
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

// iskolaFooldal.addEventListener('click', () => {
//   currentPage = 0;
//
//   let currentPageZIndex = pageArray[currentPage].style.zIndex;
//   });


/************************* ANIMATE BETWEEN PAGES START **************************/


// var allPages = document.querySelectorAll('section');
// // function pageTransition(currentPage){
// //
// //   function animate(elem, increment, endOpacity) {
// //       if(elem.style.opacity === endOpacity) {
// //         clearInterval(id);
// //       }
// //       else{
// //         elem.style.opacity += increment;
// //       }
// //     }
// //
// //     var id = setInterval(animate, 100);
// //     animate(allPages[currentPage], 0.01, 1);
// //     animate(allPages[currentPage-1], -0.01, 0);
// //
// //   }
//
//
//
// // allPages[1].style.opacity = 0;
// function pageTransition() {
//
//   // for(let i = 0; i < allPages.length; i++){
//   //   if(i !== currentPage){
//   //     allPages[i].style.opacity = 0;
//   //   }
//   // }
//
//   var currentOpacity = 1;
//   var followingOpacity = 0;
//   function animate(){
//
//         if(allPages[currentPage-1].style.opacity > -0.01){
//           currentOpacity -= 0.01;
//           allPages[currentPage-1].style.opacity = currentOpacity;
//           // setTimeout(() => {
//           //   followingOpacity += 0.01;
//           //   allPages[currentPage].style.opacity = followingOpacity;
//           //   console.log("fasz");
//           // }, 1000)
//
//         }
//         else{
//           clearInterval(id);
//         }
//
//   }
//
//   var id = setInterval(animate, 10);
//
// }

// for(let i = 0; i < titles.length; i++){
//   titles[i].addEventListener('click', () => {
//     containers[i].classList.toggle('disappear');
//   })
// }

// function pageTransition (button) {
//    get currentPage
//    if its the nextPageButton then
//    give pageArray[currentPage+1] class with animate forward
//    give pageArray[currentPage] class with animate backward
//    else if its the previousPageButton then
//    give pageArray[currentPage] class with animate forward
//    give pageArray[currentPage-1] class with animate backward
// }

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
  // pageTransition();
  pageTransition("nextPage");
  currentPage += 1;
  currentPageHandler();


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
  // pageTransition();
  pageTransition("prevPage");
  currentPage -= 1;
  currentPageHandler();

}

function currentPageHandler() {
  for (let i = 0; i < pageArray.length; i++) {
    if (currentPage == i) {
      pageArray[i].style.display = 'block';
    } else {
      pageArray[i].style.display = 'none';
    }
  }
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
window.onscroll = function() {
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

/************** PAGE TURNER END **************/

export {
  setUpNextPageButton,
  setUpPreviousPageButton,
  goToPreviousPage,
  goToNextPage,
  currentPageHandler
};
