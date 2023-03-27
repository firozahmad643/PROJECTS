
const boxelement = document.querySelector("#box");

// mouseover event 
boxelement.addEventListener("mouseover", mouseOver);

// mouseover function
function mouseOver(){
  boxelement.setAttribute("style","width:8cm;height:5cm;transform:rotate(360deg)")
  let paragraph = document.querySelector("p");
  paragraph.innerText = "Cursor is over the green element";
  paragraph.style.fontSize = "40px"

}