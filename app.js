// Smooth Scrolling

function onLinkClick(id) {
  // var element= document.getElementById("vadirat");
  // // element.scrollIntoView();
  var id_array = {vadirat: 1, alapallas: 2};
  // var id = document.getElementById();

  var scroll_width= screen.height / (1.35 / 0);
  window.scrollTo(0,scroll_width);

  // window.scroll(0,findPos(document.getElementById("vadirat")));
}
// function findPos(obj) {
//     var curtop = 0;
//     if (obj.offsetParent) {
//         do {
//             curtop += obj.offsetLeft;
//         } while (obj = obj.offsetParent);
//     return [curtop];
//     }
// }
