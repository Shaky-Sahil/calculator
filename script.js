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
    const text=document.querySelector(".screen");
    const clear=document.querySelector("#clear");
    console.log(clear);

    clear.addEventListener("click",()=>{
        text.value=""
    })

    const numbers=document.querySelectorAll(".number")
    
    for (let i =0;i<numbers.length;i++){
        console.log(numbers[i]);
        numbers[i].addEventListener("click",()=>{
            text.value+=numbers[i].innerHTML;
        })
    }

    const plus=document.querySelector(".sign");
    
    plus.addEventListener("click",()=>{
        num1=text.value;
        text.value+=plus.innerHTML;
    })

}
main()