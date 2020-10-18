// First exercise
/*
let number = +process.argv[2];

if (number > 0) {
    console.log("Число положительное");
} else if(number === 0) {
    console.log("Число 0")
}
else {
    console.log("Число отрицательное")
}
*/

//Second exercise
/*
let age = +process.argv[2];

if (age < 0 || age > 120) {
    console.log("Некоректно введен возраст");
}
else {
console.log (`Вам ${age} лет`)
}
*/
//Third exercise 
/*
let number = +process.argv[2];

if (number > 0 || number === 0) {
    console.log(number);
}
else {
    console.log(-number)
}
*/

//Fourth exercise
/*
let hours = +process.argv[2];
let minutes = +process.argv[3];
let seconds =+process.argv[4];

if( hours >= 24 || minutes >= 60 || seconds >= 60) {
    console.log("Время введено не корректно")
}
else {
    console.log(`Сейчас ${hours} часов ${minutes} минут ${seconds} секунд`)
}
*/
//Fifth exercise
/*
let x = +process.argv[2];

let y = +process.argv[3];

if (x > 0 && y > 0) {
    console.log("Точка в I четверти");
}
else if ( x > 0 && y === 0) {
    console.log("Точка на оси X");
}
else if ( x === 0 && y > 0) {
    console.log("Точка на оси Y");
}
else if ( x > 0 && y < 0) {
    console.log("Точка в II четверти");
}
else if ( x < 0 && y < 0) {
    console.log("Точка в III четверти");
}
else if ( x < 0 && y > 0) {
    console.log("Точка в IV четверти");
}
else {
    console.log("Точка в начале координат");
}
*/

//Sixth exercise
/*
let numberMonth = +process.argv[2];

switch(numberMonth) {
    case 1:
        console.log("Январь");
        break;
    case 2:
        console.log("Февраль");
        break;
    case 3:
        console.log("Март");
        break;
    case 4:
        console.log("Апрель");
        break;
    case 5:
        console.log("Май");
        break;
    case 6:
        console.log("Июнь");
        break;
    case 7:
        console.log("Июль");
        break;
    case 8:
        console.log("Август");
        break;
    case 9:
        console.log("Сентябрь");
        break;
    case 10:
        console.log("Октябрь");
        break;
    case 11:
        console.log("Ноябрь");
        break;
    case 12:
        console.log("Декабрь");
        break;
    default:
        console.log("Такого месяца нет")
        break;
}*/
// seventh exercise
let firstNumber = +process.argv[2];

let secondNumber = +process.argv[3];

let element = process.argv[4];

switch(element) {
    case "/":
        console.log(firstNumber / secondNumber);
        break;
    case "*":
        console.log(firstNumber * secondNumber);
        break;
    case "+":
        console.log(firstNumber + secondNumber);
        break;
    case "-":
    console.log(firstNumber - secondNumber);
        break;
}