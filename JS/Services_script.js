$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

var first_service = document.getElementById("first_service");
var first_item = document.getElementById("first_item");
var second_service = document.getElementById("second_service");
var second_item = document.getElementById("second_item");
var fourth_service = document.getElementById("fourth_service");
var fourth_item = document.getElementById("fourth_item");


window.onload = function () {
    first_service.style.display = "none";
    second_service.style.display = "none";
    fourth_service.style.display = "none";
}

window.onscroll = function () {
    var navbar = document.getElementById("nav");

    if (scrollY > 100) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

first_item.onclick = function () {
    first_service.style.display = "block";
    second_service.style.display = "none";
    fourth_service.style.display = "none";
}
second_item.onclick = function () {
    first_service.style.display = "none";
    second_service.style.display = "block";
    fourth_service.style.display = "none";
}
fourth_item.onclick = function () {
    first_service.style.display = "none";
    second_service.style.display = "none";
    fourth_service.style.display = "block";
}
