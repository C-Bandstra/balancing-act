var banner = document.querySelector(".welcome-banner");
var icon1 = document.querySelector(".dashboard-icon");
var icon2 = document.querySelector(".trans-icon");
var main1 = document.querySelector(".page-1-main-1")
var main2 = document.querySelector(".page-1-main-2")
var main3 = document.querySelector(".page-2-main-1")
var main4 = document.querySelector(".page-2-main-2")



document.querySelector(".close-icon").addEventListener("click", closeBanner);
function closeBanner(){
  banner.style.display= "none";
}

document.querySelector(".trans-icon").addEventListener("click", highlightIcon2);
function highlightIcon2(){
  icon1.style.borderLeft= "none"
  icon2.style.borderLeft= "solid #1CA3BA"
  main1.style.visibility="hidden"
  main2.style.visibility="hidden"
  




}

document.querySelector(".dashboard-icon").addEventListener("click", highlightIcon1);
function highlightIcon1(){
  icon1.style.borderLeft= "solid #1CA3BA"
  icon2.style.borderLeft= "none"
  main1.style.visibility="visible"
  main2.style.visibility="visible"
}
