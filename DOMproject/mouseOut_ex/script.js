
const boxelement = document.querySelector("#box");

// mouseout event 
boxelement.addEventListener("mouseout", mouseOut);

// mouseout function
function mouseOut(){
  boxelement.setAttribute("style","background-color: green;padding:2cm 0px;width:6cm;transform:rotate(360deg);")
  boxelement.innerText = "Cursor is moved out the box element";
  boxelement.style.fontSize = "25px";
  boxelement.style

}