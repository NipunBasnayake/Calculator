// let number01 = Number(document.getElementById("txtNumber01").value);
// let number02 = Number(document.getElementById("txtNumber02").value);
// let operator = document.getElementById("operator").value;
// let lblOutput = document.getElementById("lblOutput");


// function calc() {
//     let output = 0;

//     // if (operator == "+") {
//     //     output = number01 + number02;
//     // } else if (operator == "-") {
//     //     output = number01 - number02;
//     // } else if (operator == "*") {
//     //     output = number01 * number02;
//     // } else if (operator == "/") {
//     //     output = number01 / number02;
//     // }

//     switch (operator) {
//         case "+":
//             output = number01 + number02;
//             break;
//         case "-":
//             output = number01 - number02;
//             break;
//         case "*":
//             output = number01 * number02;
//             break;
//         case "/":
//             output = number01 / number02;
//             break;
//         default:
//             alert("Invalid Operator");
//             break;
//     }


//     // console.log(output);

//     // console.log("Number 01 : " + number01 + " | Number 02 : " + number02 + " | Operator : " + operator);

//     lblOutput.innerHTML = output;

// }

// function plus(){
//     output = number01 + number02;
//     lblOutput.innerHTML = output;
// }

// function minus(){
//     output = number01 - number02;
//     lblOutput.innerHTML = output;
// }

// function multi(){
//     output = number01 * number02;
//     lblOutput.innerHTML = output;
// }

// function divi(){
//     output = number01 / number02;
//     lblOutput.innerHTML = output;
// }




function calc(){
    let displayText = document.getElementById("displayText").value;
    let lblOutput = document.getElementById("lblOutput");
    let cal = eval(displayText);
    lblOutput.innerHTML=cal;
}









// function Login(){
//     const username = "Saman";
//     const password = "1234";

//     let txtUserNameValue = document.getElementById("txtUserName").value;
//     let txtPasswordValue = document.getElementById("txtPassword").value;

//     if(txtUserNameValue==username && txtPasswordValue==password){
//         alert("Login Success :)");
//     } else{
//         alert("Login Fail :(");
//     }
// }

// let numbers = [10, 20, 30, 40, 50, 60, 70,80 ,90, 100];

// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
//     sum+=numbers[i];
// }
// console.log("Sum is : " + sum);


// let numbersArray = [10, 20, 30, 40, 50, 60, 70,80 ,90, 100];

// for(let number of numbersArray){
//     console.log(number);
// }

// let sum=0;
// numbersArray.forEach(number=>{
//     console.log(number);
//     sum+=number;
// });
// console.log("Sum is : " + sum);

// numbersArray.forEach(number=>{
//     document.write(`<h2>number is : ${number}</h2>`);
//     document.w
// })


// let isTrue = 10 == "10";
// console.log(isTrue);

// let iTrue = 10 === "10";
// console.log(iTrue);





