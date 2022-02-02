var inspocorner = document.getElementById("inspocorner");

var mygithub = document.getElementById("mygithub");

mygithub.addEventListener("click", goToGithub);

function goToGithub () {
window.open(
'https://www.github.com/strawberrymornings',
'_blank' //opens link in new tab
)


}

inspocorner.addEventListener("click", ToInspocorner);

function ToInspocorner () {
window.open(
"https://www.strawberrymornings.github.io/inspiration-corner", "_self" //opens link in current tab
)

}

