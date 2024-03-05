// finding element
const selectFontSize = document.querySelector("#selectFontSize");
const selectBgColor = document.querySelector("#selectBgColor");
const resetButton = document.querySelector(".btn");
const main = document.querySelector(".main");

const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  main.style.fontSize = fontSize;
  main.style.backgroundColor = bgColor;
};

//load localStorage value
const initialSetup = () => {
  const fontSize = localStorage.getItem("fontSize");
  const bgColor = localStorage.getItem("bgColor");
  if (fontSize && bgColor) {
    setValues(fontSize, bgColor)
  }
  if (!fontSize && !bgColor) {
    setValues("16px", "aqua");
  }
  if(!fontSize && bgColor){
    setValues("16px", bgColor)
  }
  if(fontSize && !bgColor){
    setValues(fontSize, "aqua");
  }
};

// change font size
const changeFontSize = (e) => {
  const selectedFontSize = e.target.value;
  main.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};

// change background color
const chageBgColor = (e) => {
  const selectedBgColor = e.target.value;
  main.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};

// remove iteam local storage
const clearLocalStorage = () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
};

//  event handlers
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", chageBgColor);
resetButton.addEventListener("click", clearLocalStorage);
initialSetup();

