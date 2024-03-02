const slideShowElements = document.querySelectorAll(".slideShow-element")


let count = 1;
setInterval(()=>{
    count++;
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current")
    if(count > slideShowElements.length){
        slideShowElements[0].classList.add("current");
        count = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
}, 3000)