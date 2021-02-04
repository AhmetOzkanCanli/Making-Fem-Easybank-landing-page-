const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade");


btnHamburger.addEventListener('click', () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");//Close Hamburger menu
    body.classList.remove("no-scroll")
    fadeElems.forEach((elem) => {
      
      elem.classList.add("fade-out");
      elem.classList.remove("fade-in");  
    })
    
  }else {
    header.classList.add("open") //Open Hamburger Menu
    body.classList.add("no-scroll")
    fadeElems.forEach((elem) => {
      elem.classList.add("fade-in");
      elem.classList.remove("fade-out");
    });
    
  }
})


