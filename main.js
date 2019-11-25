var banner = document.querySelector(".welcome-banner");
var icon1 = document.querySelector(".icon-1");
var icon2 = document.querySelector(".icon-2");
var main1 = document.querySelector(".main1")
var main2 = document.querySelector(".main2")


document.querySelector(".close-icon").addEventListener("click", closeBanner);
function closeBanner(){
  banner.style.display= "none";
}

document.querySelector(".icon-2").addEventListener("click", highlightIcon2);
function highlightIcon2(){
  icon1.style.borderLeft= "none"
  icon2.style.borderLeft= "solid #1CA3BA"
  main1.style.visibility="hidden"
  main2.style.visibility="hidden"

}

document.querySelector(".icon-1").addEventListener("click", highlightIcon1);
function highlightIcon1(){
  icon1.style.borderLeft= "solid #1CA3BA"
  icon2.style.borderLeft= "none"
  main1.style.visibility="visible"
  main2.style.visibility="visible"
}
