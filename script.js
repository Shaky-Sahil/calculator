function add(num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    ans=num1+num2;
    text.value=ans

}
function subtract (num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    console.log(num1-num2);
}
function multiply (num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    console.log(num1*num2);
}
function divide (num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    console.log(num1/num2);
}
function operator(num1,sign,num2,text){

    switch(sign){
        case "+":
            add(num1,num2,text);
            break;
        case "-":
            subtract(num1,num2,text);
            break;
        case "*":
            multiply(num1,num2,text);
            break;
        case "/":
            divide(num1,num2,text);
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
        console.log(typeof(text.value));
        num1=text.value;
        text.value+=" "+plus.innerHTML+" ";
    })

    const equals=document.querySelector("#equals");
    equals.addEventListener("click",()=>{
        val=text.value.split(" ");
        operator(val[0],val[1],val[2],text);
    })
}
main()