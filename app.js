function calc(){
    let displayText = document.getElementById("displayText").value;
    let lblOutput = document.getElementById("lblOutput");
    let cal = eval(displayText);
    lblOutput.innerHTML=cal;
}

