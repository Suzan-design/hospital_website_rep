$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

window.onscroll = function () {
    var navbar = document.getElementById("nav");

    if (scrollY > 100) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}