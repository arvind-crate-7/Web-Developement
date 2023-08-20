let incrementbtn = document.getElementById("btn1");
let decerementbtn = document.getElementById("btn2");
let displayvalue = document.getElementById("displayvalue");
let resetval = document.getElementById("btn3");

incrementbtn.addEventListener("click" , () => {
    const value = Number(displayvalue.innerText);

    if(value >= 10){
        alert("10+ value are not allowed");
    }
    else{
        displayvalue.innerText = value + 1;
    }
});

decerementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);

    if(value > 0){
        displayvalue.innerText = value - 1;
    }
    else{
        alert("Negative value is not allowes");
    }
});

resetval.addEventListener("click" , () =>{
    displayvalue.innerText = 0;
});
