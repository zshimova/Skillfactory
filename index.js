// Задание 7.6.1 
function palindrome() {
    let inputString = prompt('Введите слово или выражение');
    inputString = inputString.toLowerCase().replaceAll(' ', '');
    let str = inputString.split('').reverse().join('');
    if (inputString == str) {
        console.log(`Слово ${inputString} является палиндромом`)
    } else {
        console.log(`Слово ${inputString} не является палиндромом`)
    }
}
palindrome();

// ************************************************************************************************************************************************************

// Задание 7.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);

// *************************************************************************************************************************************************************

// Задание 7.6.3
let number = +prompt('Введите число');
let numArr = [];
for (let i = 0; i <= number; i++) {
    numArr[i] = i;
}
console.log(numArr);

// *************************************************************************************************************************************************************

// Задание 7.6.4
const field = Array.from({ length: 3 }, () => Array.from(Array(3), () => ' '));
const type = {
    0: 'X',
    1: 'O'
}
for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
        const random = Math.round(Math.random())
        field[i][j] = `${type[random]}`;
    }
}
for (const row of field) {
    console.log(row.join(''));
}

// *************************************************************************************************************************************************************

// Задание 7.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = Object.values(obj);
arrValues.splice(2, 1, 1, 2, 3, 4, 5);
console.log(arrValues);