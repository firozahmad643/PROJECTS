// display value
const displayValue = document.getElementById("displayValue");

//increment function
document.querySelector("#incrementBtn").addEventListener("click",incrementFun);
function incrementFun(){
    const value = Number(displayValue.innerText);
    if(value > 100){
        alert("100+ value are not allowed")
    }
    else{
        displayValue.innerText = value + 1;
    }
}

//Decrement function
document.querySelector("#decrementBtn").addEventListener("click",decrementFun);
function decrementFun(){
    const value = Number(displayValue.innerText);
    if(value < 1){
        alert("Negative value is not allowed")
    }
    else{
        displayValue.innerText = value - 1;
    }
}

// reset function
document.querySelector("#resetBtn").addEventListener("click",resetFun);
function resetFun(){
    displayValue.innerText = 0;
}


