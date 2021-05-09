function add(num1,num2){
    console.log(num1+num2);
}
function subtract (num1,num2){
    console.log(num1-num2);
}
function multiply (num1,num2){
    console.log(num1*num2);
}
function divide (num1,num2){
    console.log(num1/num2);
}
function operator(num1,sign,num2){
    switch(sign){
        case "+":
            add(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
    }
}


function main(){
    operator(5,"+",2);
    operator(5,"-",2);
    operator(5,"*",2);
    operator(5,"/",2);
    
}
main()