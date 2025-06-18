document.getElementById('main-form').addEventListener('submit', checkForm);
function checkForm(event){
    let el = document.getElementById('main-form');
const name=el.name.value;
const pass=el.pass.value; // зачем value?
const repass=el.repass.value;
let state=el.state.value;
let fail="";      //alert("Ошибка,поле не заполнено"); ковычки говорят текст любой
if (name =="" || pass=="" || repass=="")
fail= "заполните все поля";
 else if (repass !==pass)
    fail="Пароль должен совпадать";
else if (name.length <=1 || name.length>50)
    fail="введите корректное имя" // без скобок и alert попробывать!!!
 else if (pass.split("&").length > 1)
fail="не корректный пароль";

if ( fail!="") {
    document.getElementById(id='error').innerHTML = fail; // id  можно убрать все равно будет работать . 
    
} else {
    alert("все данные корректно заполнены");
    window.location="https://learn.javascript.ru/function-basics";
    
}
//
event.preventDefault();
}
