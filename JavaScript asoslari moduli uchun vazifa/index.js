// Vazifa 1
const abc = (a, b, c) => {
    if (a <= 0) {
        return a;
    } else if (b <= 0) {
        return b;
    } else if (c <= 0) {
        return c;
    } else {
        return `${a}${b}${c}`;
    }
};
// console.log(abc(5, 9, 4));
// console.log(abc(5, 0, 4));

// Vazifa 1
const getWeekdays = ( num ) => {
    switch (num) {
        case 1:
            return 'Dushanba'
            break;
        case 2:
            return 'Seshanba'
            break
        case 3:
            return 'Chorshanba'
            break
        case 4:
            return 'Payshanba'
            break
        case 5:
            return 'Juma'
            break
        case 6:
            return 'Shanba'
            break
        case 7:
            return 'Yakshanba'
            break
        default:
            return 'none'
            break;
    }
}
// console.log(getWeekdays(1));
// console.log(getWeekdays(147));

// Vazifa 3
const getLeapYear = ( year ) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(getLeapYear(2024));
// console.log(getLeapYear(2025));

// Vazifa 4
const getNumberLength = (num) => {
    if (num.length == 1) {
        return 1
    } else if (num.length == 2) {
        return 2
    } else if (num.length == 3) {
        return 3
    } else {
        return "Berilgan son uch xonali sondan yuqori"
    }
}
// console.log(getNumberLength('1'));
// console.log(getNumberLength('22'));
// console.log(getNumberLength('999'));

// Vazifa 5
const a = 1;
const b = 1;
const c = 1;
const d = 1;

const determinePositivity = () => {
    if (a > 0 && b > 0 && c > 0 && d > 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(determinePositivity());

// Vazifa 6
const aa = 3;
let bb = 0

for (let i = 0; i <= aa; i++) {
    bb += i
}

// console.log(bb);

// Vazifa 7
// Bajara oladim !

// Vazifa 8
let n = 12453453;
// console.log('Raqamlar soni: ', String(n).length);

// Vazifa 9
let nn = 12321

// My hook
const reversedNn = String(nn).split('').reverse().join('');
if (nn == reversedNn) {
    // console.log(true);
} else {
    // console.log(false);
}

// With for loop
let isPalindrome = true;

for (let i = 0, j = String(nn).length - 1; i < j; i++, j--) {
    if (String(nn)[i] !== String(nn)[j]) {
        isPalindrome = false;
        break;
    }
}

// console.log(isPalindrome);

// Vazifa 10
const nnn = 1111;
let yigindi = 0;

for (let i = 0; i < String(nnn).length; i++) {
    yigindi += parseInt(String(nnn)[i]);
}
// console.log(yigindi);

// Vazifa 11
let arr = ['apple', 'orange', 'banan', 'pear']
let newArr = [...arr].reverse();
// console.log(newArr);

// Vazifa 12 
let nN = 5
let nnArr = [3, 5, 17, 89, 5, 0, 5]
let total = 0

for (let i = 0; i < nnArr.length; i++) {
    if (nnArr[i] == nN) {
        total += 1;
    }
}
// console.log(total);

// Vazifa 13
let aA = 20
let aaArr = [3, 5, 17, 89, 5, 0, 5]

for (let i = 0; i < aaArr.length - 1; i++) {
    for (let j = i + 1; j < aaArr.length; j++) {
        if (nnArr[i] + nnArr[j] === aA) {
            // console.log('1-Arr:',nnArr[i], '2-Arr', nnArr[j], 'a: ',aA);
        }
    }    
}

// Vazifa 14
let arrayOfNumbers = [3, 9, 49, 7, 0, 1]
// console.log(arrayOfNumbers.sort((a, b) => a - b));

//Vazifa 15
let arrayOfNumbersSecondLargest = [3, 9, 49, 7, 0, 1]
console.log(arrayOfNumbersSecondLargest.sort((a, b) => a - b)[arrayOfNumbersSecondLargest.length - 2]);
