

  var innerwrapper = document.querySelectorAll('.titles');
  for(var i = 0; i < innerwrapper.length; i++){
    var paragraphs = innerwrapper[i].querySelectorAll('p');
    var button = document.createElement('BUTTON');
    button.addEventListener('click', ()=> {
      paragraphs.forEach((item, i) => {
        item.classList.add('appear');
      });

    });
    innerwrapper[i].appendChild(button);
  }


function konyvekMenu(){}














function setup(){
  konyvekMenu();
}

setup();
