var mobile = document.getElementById("mobile");
var open = document.getElementById("open");
var close = document.getElementById("close");
var airtime = document.getElementById("air");
var airpop = document.getElementById("airtime-pop");
var close3 = document.getElementById("cc");

open.addEventListener("click", function(){
  mobile.style.display = "flex"
  
})
close.addEventListener("click", function(){
  mobile.style.display = "none"
})





var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});



console.log(open);

console.log(close3);
