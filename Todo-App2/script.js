// Finding Elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTodo() {
  if (inputBox.value === "") {
    alert("Something went Wrong!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `<i id="delete-btn" class="fa-regular fa-trash-can"></i>`;
    li.appendChild(span);
    inputBox.value = "";
    setData()
  }

}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      setData()
    }else if(e.target.tagName === "I"){
      e.target.parentElement.parentElement.remove();
      setData()
    }
  },
  false
);

function setData (){
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData (){
  listContainer.innerHTML = localStorage.getItem("data")
}
getData();