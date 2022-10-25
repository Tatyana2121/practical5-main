'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
//Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }

function task1() {
    let str = document.querySelector('.task1 p');
    str.outerHTML = '<p>Ку-ку! А я <b>жирный</b>!</p>';
    console.log('ok');
};
document.querySelector('.btn1').onclick = task1;

function task2() {
    let str = document.querySelector('.p2');
    str.outerHTML = '<h3>Абзац превратился в h3!</h3>';
    console.log('ok');
};
document.querySelector('.btn2').onclick = task2;

function task3() {
    let str = document.querySelector('.p3');
    str.outerHTML = '<h3>' + str.textContent + '</h3>';
    console.log('ok');
};
document.querySelector('.btn3').onclick = task3;

function task4() {
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    document.querySelector('.sum').textContent = num1 + num2;
}
document.querySelector('.btn4').onclick = task4;

function task5() {
    let str = document.querySelectorAll('.task5 p');
    for (let i = 0; i < str.length; i++) {
        str[i].innerHTML = i;
    }
};
document.querySelector('.btn5').onclick = task5;