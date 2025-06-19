let age = Number(prompt("Сколько тебе лет?"));
if (age>0, age<=2){
    alert("Малыш");
}
else if (age<=2, age>12){
    alert("Не туда не сюда");
}
else if ( age>=12, age <=18){
    alert('подросток');
}
else if (age>18, age<=60 ){
    alert("Взрослый");
}
else  {
    alert("пенсионер");
}