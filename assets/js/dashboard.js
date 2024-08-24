var airtime = document.getElementById("air");
var data = document.getElementById("air1");
var airtime1 = document.getElementById("data-pop");
var airpop = document.getElementById("airtime-pop");
var close3 = document.getElementById("close");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var buydata = document.getElementById("buy-data");
var direct = document.getElementById("direct");
var sme = document.getElementById("sme");


airtime.addEventListener("click", function(){
    airpop.style.display = "flex"
  })
  data.addEventListener("click", function(){
    airtime1.style.display = "flex"
  })
  close4.addEventListener("click", function(){
    airtime1.style.display = "none"
  })
  close3.addEventListener("click", function(){
    airpop.style.display = "none"
  })
  sme.addEventListener("click", function(){
    buydata.style.display = "flex"
  })
  direct.addEventListener("click", function(){
    buydata.style.display = "flex"
  })
  close5.addEventListener("click", function(){
    buydata.style.display = "none"
  })
console.log(buydata, close5 );