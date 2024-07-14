let nav = document.querySelector("nav");
let menuBar = document.querySelector(".menu-icon");
let xMark = document.querySelector(".menu-icon-xmarx");
let overlay = document.querySelector(".overlay");

menuBar.addEventListener("click", function (){
    nav.classList.add("active");
    overlay.classList.add("active");
});

xMark.onclick = function (){
    nav.classList.remove("active");
    overlay.classList.remove("active");
}
