var gallery = document.getElementById("gallery");

var mygithub = document.getElementById("mygithub");

mygithub.addEventListener("click", goToGithub);

function goToGithub () {
window.open(
'https://www.github.com/strawberrymornings',
'_blank' //opens link in new tab
)


}

gallery.addEventListener("click", ToGallery);

function ToGallery () {
window.open(
"https://www.strawberrymornings.github.io/gallery", "_self" //opens link in current tab
)

}

