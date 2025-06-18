let userName;
do{ userName = prompt("Введите ваше имя!");
} while (userName === null || typeof userName !=='string');
 alert(`Привет!: ${userName}` ); // не срабатывает оператор игнора ввода не строковых данных??
 //const data= 2025;
 const age=(data,born) => {return data-born;};// можно и data-born без скобок и return
 alert(age(2025,prompt("Года вашего рождения?")));
//let side=prompt("Сообщите длину стороны квадрата?")
function perimetr(a){
    return a*4
}
alert(perimetr(prompt("Сообщите длину стороны квадрата")));// необязательно создавать переменную prompt;
// вопрос как вписать Number в alert, для того чтобы принимать только числовые значения.
const square= (r)=>(Math.PI*(r^2))/2;
     alert(square(prompt("Введите радиус окружности")));
//
let distance=Number(prompt("Введите расстояние (км)"));
let time=Number(prompt("Введите время (ч)"))
const speed=(distance,time)=>distance/time;
alert(speed(distance,time) + "км/ч");
//
//const currency_1=Number(prompt("Введите валюту которую хотите приобрести?:"));
//const currency_2=Number(prompt("Объем имеющейся у вас валюты равен:"));
const exchangeRates={
    rates:{
    usd: 75.00,
    eur: 90.23,
    rub: 1,
} }
//let amount = Number(prompt("Объем имеющейся у вас валюты равен:"));
function formatCurrency(amount,currency) {
const formatter=new Intl.NumberFormat(`ru-RU`,{ // встроенный объект js который форматирует числа в валюту `ru-RU` также `de-DE`
    style:`currency`,
   currency:currency.toUpperCase()
});
return formatter.format(amount)
}
alert(formatCurrency(Number(prompt("Объем имеющихся у вас рублей равен:")), 'rub' )); // проверка символов
const exchangeUsd=(amount,usd)=>amount/this.rates[usd]; // 
const exchangeEur=(amount,eur)=>amount/this.rates[eur];

console.log(exchangeUsd(Number(prompt("Объем имеющихся у вас рублей равен:")), this.rates[usd]));   
//console.log(formatCurrency(75, 'eur')); 
