// exerice one
/*
let numberOne = +process.argv[2];
let numberTwo = +process.argv[3];

let sum;

sum = 0;

while(numberOne <= numberTwo) {
    sum = numberOne + sum;
    numberOne++;
}

console.log(sum);
*/

//exercise two
/*
let numberOne = +process.argv[2];
let numberTwo = +process.argv[3];


while(numberOne != 0 && numberTwo != 0) {
    if (numberOne > numberTwo) {
        numberOne = numberOne % numberTwo;
    }
    else {
        numberTwo = numberTwo % numberOne;
    }
}

console.log(numberOne + numberTwo)
*/

//exercise three
/*
let numberOne = +process.argv[2];

for (let i = numberOne; i > 0; i--) {
    if (numberOne % i === 0) {
        console.log(i);
    }
}

*/

// exercise four
/*
let number = +process.argv[2];

let numbers = 1;

if ( number >= 10) {
    while (number !== 0 ) {
       number = number / 10;
        if (number < 10) {
            number = 0;
        }
        numbers++;
    }
}

console.log(numbers);
*/

//exercise five
/*
let possitive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let noEven = 0;
for(let i = 2; i < 12; i++) {
    let number = +process.argv[i];
    if (number > 0) {
        possitive++;
        if(number % 2 == 0) {
            even++;
        }
        else {
            noEven++;
        }
    }
    else if (number < 0) {
        negative++;
        if(number % 2 == 0) {
            even++;
        }
        else {
            noEven++;
        }
    }
    else {
        zero++;
        even++;
    }
}
console.log(`${possitive} - положительных`);
console.log(`${negative} - отрицательные`);
console.log(`${zero} - нули`);
console.log(`${even} - Четные`);
console.log(`${noEven} - Не четные`);

*/

//exercise seven
/*
let number = 0;

while (number !== "n") {
  number = +process.argv[2];
}
console.log('hello');

*/

let s = "123456";

console.log(s.substring(0, 2));