//Массив со случаными числами
let array = [];
    function randomArray(array)
 {  do {
    let randomNumber = Math.floor(Math.random()*10);
    if (array.indexOf(randomNumber) === -1) {
    array.push(randomNumber);
    }
    } while(array.length < 7)
    return array;
}

console.log(randomArray(array));
//Сортировка массива

function sortArray(array) {
for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j] > array[j + 1]) {
            let temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
        }
    }
}
    return array;
}

console.log(sortArray(array));

//Дискриминант

let a = 1;
let b = 3;
let c = 1;



function discriminant(a, b, c) {
    let x;
    if((b*b - 4*a*c) > 0) 
    {
        x = (-b + Math.sqrt(b*b - 4*a*c))  / (2 * a);
        console.log("Первый корень равен " + x);
        x = (-b - Math.sqrt(b*b - 4*a*c)) / (2 * a);
        console.log("Второй корень равен " + x);
    }
    else if((b*b - 4*a*c) === 0) {
        x = (-b/(2 * a));
        console.log("X равен " + x);
    }
    else {
        console.log('Дискриминант меньше 0, корни невещественные.');
    }
}

discriminant(a, b, c);
