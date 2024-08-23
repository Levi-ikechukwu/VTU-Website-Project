var airtime = document.getElementById("air");
var airpop = document.getElementById("airtime-pop");
var close3 = document.getElementById("close");



airtime.addEventListener("click", function(){
    airpop.style.display = "flex"
  })
  close3.addEventListener("click", function(){
    airpop.style.display = "none"
  })
console.log(airtime, airpop, close3 );