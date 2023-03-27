const boxElement = document.getElementById("box");

// onclick event
boxElement.addEventListener("click", onClick);

// onclick function
function onClick(){
  boxElement.setAttribute("style","border:10px solid black;background-color:blue;border-radius:50%;transform:rotate(360deg);padding:2cm;font-size:45px;")
}