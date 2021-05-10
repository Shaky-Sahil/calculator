function add(num1,num2,text){       
    num1=parseInt(num1);
    num2=parseInt(num2);
    ans=num1+num2;
    text.value=ans;

}
function subtract (num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    ans=num1-num2;
    text.value=ans
}
function multiply (num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    ans=num1*num2;
    text.value=ans
}
function divide (num1,num2,text){
    num1=parseInt(num1);
    num2=parseInt(num2);
    ans=num1/num2;
    text.value=ans
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
    const equals=document.querySelector("#equals");
    const sign=document.querySelectorAll(".sign");
    const numbers=document.querySelectorAll(".number")

    clear.addEventListener("click",()=>{
        text.value=""
    })

    
    for (let i =0;i<numbers.length;i++){
        numbers[i].addEventListener("click",()=>{
            text.value+=numbers[i].innerHTML;
        })
    }
    for (let i =0;i<sign.length;i++){
        sign[i].addEventListener("click",()=>{
            val=text.value.split(" ");
            if (val.length==1){
                num1=text.value;
                text.value+=" "+sign[i].innerHTML+" ";
        }
        
        else{
            operator(val[0],val[1],val[2],text);
            text.value+=" "+sign[i].innerHTML+" ";
        }
    })
    }   

    equals.addEventListener("click",()=>{
        val=text.value.split(" ");
        operator(val[0],val[1],val[2],text);
    })
}
main()