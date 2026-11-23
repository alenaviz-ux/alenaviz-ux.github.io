const buttons = document.querySelector("#burger-buttons")
const burger = document.querySelector("#burger")
const close1 = document.querySelector("#close")
const mobileMenu = document.querySelector(".mobile-list")

buttons.addEventListener("click",function(){
    burger.classList.toggle("hide")
    close1.classList.toggle("hide")
    mobileMenu.classList.toggle("show-mobile")
})


