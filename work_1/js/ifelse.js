 'use strict';


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log('TEst');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// let counter = 0;

// for(let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);
// console.log(Object.keys(options).length);

// const arr = [1, 22, 13, 24, 5, 57];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[90] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i,arr)  {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

//arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

const obj = {
    a: 5,
    b: 1,
};

const copy = obj;

copy.a = 10;
console.log(copy);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }
        return objCopy;
    
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};
const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);


const add = {
    d: 10,
    e: 20,
};

console.log(Object.assign(numbers, add));


const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'lj', 'blogers'];
const internet = [... video, ...blogs, 'internet', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);


const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};
console.log(newObj);