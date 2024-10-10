var airtime = document.getElementById("air");
var data = document.getElementById("air1");
var airtime1 = document.getElementById("data-pop");
var airpop = document.getElementById("airtime-pop");
var close3 = document.getElementById("close");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");
var close7 = document.getElementById("close7");
var buydata = document.getElementById("buy-data");
var direct = document.getElementById("direct");
var sme = document.getElementById("sme");
var select = document.getElementById("select");
var val = document.getElementById("val");
var mtn = document.getElementById("mtn");
var mtn1 = document.getElementById("mtn1");
var mtn2 = document.getElementById("mtn2");
var mtn3 = document.getElementById("mtn3");
var mtn4 = document.getElementById("mtn4");
var mtn5 = document.getElementById("mtn5");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var bb = document.getElementById("bb");
var cmp = document.getElementById("cmp");
var send = document.getElementById("send");
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

  mtn.addEventListener("click", function(){
    select.style.display = "flex"
  })
  mtn1.addEventListener("click", function(){
    select.style.display = "flex"
  })
  mtn2.addEventListener("click", function(){
    select.style.display = "flex"
  })
  mtn3.addEventListener("click", function(){
    select.style.display = "flex"
  })
  mtn4.addEventListener("click", function(){
    select.style.display = "flex"
  })
  mtn5.addEventListener("click", function(){
    select.style.display = "flex"
  })
  close6.addEventListener("click", function(){
    select.style.display = "none"
  })
  b1.addEventListener("click", function(){
    val.style.display = "flex"
  })
  b2.addEventListener("click", function(){
    val.style.display = "flex"
  })
  b3.addEventListener("click", function(){
    val.style.display = "flex"
  })
  b4.addEventListener("click", function(){
    val.style.display = "flex"
  })
  b5.addEventListener("click", function(){
    val.style.display = "flex"
  })
  b6.addEventListener("click", function(){
    val.style.display = "flex"
  })
  close7.addEventListener("click", function(){
    val.style.display = "none"
  })
  send.addEventListener("click", function(){
    cmp.style.display = "flex"
  })

