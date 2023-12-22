function changeBg(getValue){
    let bgColor = document.querySelector('.bgColor');
    let selectText = document.querySelector('.card');
    bgColor.style.backgroundColor = getValue.value ;
    let textValue = getValue.options[getValue.selectedIndex].text;
    selectText.innerHTML = textValue;
}