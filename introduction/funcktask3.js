var action=(prompt("Выберите действие!"));
var a=parseInt(prompt("Введите первое число"));
var b=parseInt(prompt("Введите второе число"))
var update=function (action,a,b){
    switch(action){
    case "+":
    return a+b;
    break;
    case "-":
    return  a-b;
    break;
    case "*":
    return a*b;
    case "/":
        return a/b;
        default:
            return("repaet please!")
    
}}

alert(update(action,a,b));