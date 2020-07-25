
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
  });

  burgerButton.addEventListener('click', () => {
    document.getElementsByClassName('topnav')[0].style.display = 'block';
    cancelButton.style.display = 'block';
    burgerButton.style.display = 'none';
  });
}

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


// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//       document.getElementsByClassName("mobile_menu")[0].style.display = "flex";
//   } else{
//     document.getElementsByClassName("mobile_menu")[0].style.display = "none";
//   }
//   prevScrollpos = currentScrollPos;
// }

/****************** MOBILE NAVBAR END ********************/


export {
  cancelButton,
  burgerButton,
  createMobileMenu,
  responsiveNavigation,
  mediaFunction
};
