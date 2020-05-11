const myInit = {
    mode: 'same-origin',
    credentials: 'same-origin'
};

fetch(" navbar.html", myInit)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("topnav").innerHTML = data;
  });
