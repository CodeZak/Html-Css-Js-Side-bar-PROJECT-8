let myNav = document.querySelector("nav")
let moreBtn = document.querySelector(".more")
let closeBtn = document.querySelector(".close_icon")

moreBtn.addEventListener("click", function() {
myNav.classList.toggle("show_nav");
})

closeBtn.addEventListener("click", function() {
myNav.classList.toggle("show_nav");
})
