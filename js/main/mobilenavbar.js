
/****************** MOBILE NAVBAR START ********************/

/**
//NEED TO MAKE STUFF IN THE MOBILE CLICKABLE
**/


let cancelButton = document.createElement('BUTTON');
let burgerButton = document.createElement('BUTTON');

function createMobileMenu() {
  document.querySelector('.mobile_menu').appendChild(cancelButton);
  cancelButton.classList.add('cancel_button');
  cancelButton.innerHTML = '<img src="../kepek/menu/cancel.png" alt="menu-cancel"/>';

  document.querySelector('.mobile_menu').appendChild(burgerButton);
  burgerButton.innerHTML = '<img src="../kepek/menu/menu.png" alt="menu_button"/>';
  burgerButton.classList.add('burger_menu');
}

function responsiveNavigation() {
  cancelButton.addEventListener('click', () => {
    document.getElementsByClassName('topnav')[0].style.display = 'none';
    cancelButton.style.display = 'none';
    burgerButton.style.display = 'block';
    window.scroll(0,0);
  });

  burgerButton.addEventListener('click', () => {
    document.getElementsByClassName('topnav')[0].style.display = 'block';
    cancelButton.style.display = 'block';
    burgerButton.style.display = 'none';
    window.scroll(0,0);
  });
}

function navbarToggler(){
  let navbarButtons = document.querySelectorAll('.dropdown');
  let navbarContent = document.querySelectorAll('.dropdown .dropdown_content');

  for(let i = 0; i < navbarButtons.length; i++){
    navbarButtons[i].addEventListener('click', () => {
    navbarContent[i].classList.toggle('dropdown_links_appear');
    });
  }


}

navbarToggler();




function mediaFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementsByClassName('topnav')[0].style.display = 'none';
    cancelButton.style.display = 'none';
    burgerButton.style.display = 'block';

    // Kérdés, hogy ezzel mi lesz még. Amikor bemegyek a menübe, eltüntetem az összeset, és ha kimegyek, akkor vissza
  }
  else {
    burgerButton.style.display = 'none';
    cancelButton.style.display = 'none';
    document.getElementsByClassName('topnav')[0].style.display = 'flex';
  }


}

var x = window.matchMedia("(max-width: 1200px)")
mediaFunction(x) // Call listener function at run time
x.addListener(mediaFunction) // Attach listener function on state changes


let prevScrollpos = window.pageYOffset;
function toggleOnScroll() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("mobile_menu")[0].style.opacity = 1;
      document.getElementsByClassName("mobile_menu")[0].style.pointerEvents = "auto";
  } else{
    document.getElementsByClassName("mobile_menu")[0].style.opacity = 0;
    document.getElementsByClassName("mobile_menu")[0].style.pointerEvents = "none";
  }
  prevScrollpos = currentScrollPos;
}

/****************** MOBILE NAVBAR END ********************/


export {
  cancelButton,
  burgerButton,
  createMobileMenu,
  responsiveNavigation,
  mediaFunction,
  toggleOnScroll
};
