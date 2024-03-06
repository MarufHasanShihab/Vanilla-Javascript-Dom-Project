// Finding Elements 
const dropArea = document.querySelector("#drop-area");
const inputFile = document.querySelector("#input-file");
const imageView = document.querySelector(".image-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage (){
    let imagLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imagLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
dropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})