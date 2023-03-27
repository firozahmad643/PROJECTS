let display = document.querySelector(".display");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = "You have pressed key (Down) = "+e.key;
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display.style.color = "blue";
  display.innerText = "You have released key (Up) = "+e.key;
});