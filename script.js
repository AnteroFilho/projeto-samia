let images = document.querySelectorAll(".slider img");
let currentImagesIndex = 0;
var time = 3000;
let max  = images.length;
const avancar = document.getElementById('avancar')
const voltar = document.getElementById('voltar')

voltar.onclick = previousImage


avancar.onclick = nextImage


function previousImage () {
    time = 0;
    images[currentImagesIndex].classList.remove("selected")
    currentImagesIndex--
    console.log(currentImagesIndex)
    if(currentImagesIndex < 0 ){
        currentImagesIndex = 3;
        images[currentImagesIndex].classList.add("selected")        
    }
    images[currentImagesIndex].classList.add("selected")
}

function nextImage () {
    time = 0
    images[currentImagesIndex].classList.remove("selected")
    currentImagesIndex++
    if(currentImagesIndex >= max){
        currentImagesIndex = 0;
    }
    images[currentImagesIndex].classList.add("selected")
}

function start(){
   setInterval(() => {
      nextImage()
   },time)
}



window.onload = start;