window.onscroll = function() {myFunction()};
            
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function mynavbar() {
// var x = document.getElementById("Mylinkpage");
// if (x.className === "linkpage") {
// x.className += " responsive";
// } else {
// x.className = "linkpage";
// }
// }  