let images = document.querySelectorAll(".slider img");
let currentImagesIndex = 0;
let time = 3000;
let max  = images.length;
let clicks = 0;
const avancar = document.getElementById('avancar')
const voltar = document.getElementById('voltar')
const btnFModal = document.getElementById("close-btn")
const janelaModal = document.getElementById("janela-modal")
const carrosselImg = document.getElementById("carrossel-slider")
const imgModal = document.getElementById("img-modal")
const avancarM = document.getElementById("avancarM")
const voltarM = document.getElementById("voltarM")
const girar = document.getElementById("girar")

voltar.onclick = previousImage
avancar.onclick = nextImage
btnFModal.onclick = closeModal
carrosselImg.onclick = openModal
avancarM.onclick = avancarModal
voltarM.onclick = voltarModal
girar.onclick = rollImage

function rollImage() {
    clicks++   
    let rotation = clicks * 90;
    imgModal.style.transform = `rotate(${rotation}deg)`
    
}

function voltarModal () {    
    currentImagesIndex--    
    if (currentImagesIndex <0) {
        currentImagesIndex = 3;
        imgModal.src = `samia${currentImagesIndex}.jpeg`
    }
    imgModal.src = `samia${currentImagesIndex}.jpeg`    
}
 
function avancarModal() {    
    currentImagesIndex++    
    if(currentImagesIndex >= 4){
        currentImagesIndex = 0
        imgModal.src = `samia${currentImagesIndex}.jpeg`
    }
    imgModal.src = `samia${currentImagesIndex}.jpeg`
}

function openModal(){
    janelaModal.style.display = "block"
    imgModal.src = `samia${currentImagesIndex}.jpeg`    
}

function closeModal(){
    janelaModal.style.display = "none"
    time = 3000    
}


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

let start = setInterval(() => {
      nextImage()
   },time)

window.onload = start;
