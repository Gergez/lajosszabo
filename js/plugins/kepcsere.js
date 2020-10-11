let logo = document.querySelector('.logo');
let currentLogo = 0;
let logoOsszes = ['15', '0666', '0673', '0674', '0675', '0676'];

function changeLogo(){
 logo.src = `/kepek/logok/vagott/${logoOsszes[currentLogo]}.png`;
}

function logoPager(){
  if(event.key == "ArrowUp" && currentLogo < logoOsszes.length){
    currentLogo += 1;
    changeLogo();
  }else if(event.key == "ArrowDown" && logoOsszes != 0){
    currentLogo -= 1;
    changeLogo();
  }
}

window.onkeydown = () => {
  logoPager();
}
