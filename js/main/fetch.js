function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("navbar").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "../js/fetch/navbar.html", false);
  xhttp.send();
}

export { loadDoc };
