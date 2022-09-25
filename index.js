//printing
console.log('Hello world');
// console.log(2 + 3);

//data types
//1. String
//2. Number
//3. boolean
//4. undefined
//5. null
//6. symbol
//7. object

//let,var,const
//global and local scoped
var a = 'hello world';
var a = 100;

//local scoped
let b = 5;
b = 10;

//local scoped
const c = 10;

//string
let str = 'hello world!';
//number
let num = 10.5;
//boolean
let flag = true;

//objects
let obj1 = {
  fruit: 'Apple',
  flag: true,
};

console.log(obj1.fruit);
//array
let arr = [
  1,
  'orange',
  false,
  {
    m: 'money',
  },
];

//properties of array
arr.push('hiii');

// console.log(arr);

//conditional statement

let x = 19;

//if else conditions
if (x > 19) {
  console.log('You can drive');
} else if (x < 19) {
  // console.log("You can't drive");
} else {
  // console.log('None');
}

//switch
switch (x) {
  case 19:
    console.log('hello from switch');
    break;
  // case
  default:
    console.log('default');
    break;
}

//ternary operator
let l = x > 19 ? console.log('Greater than 19') : console.log('Lesser than 19');

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop
let j = 0;
while (j < 10) {
  // console.log(j);
  j++;
}
let k = 0;

//do - while
do {
  // console.log(k);
  k++;
} while (k > 10);

//function
//function-keyword nameOfTheFunction(parameters)
// {
//   statements;
// }
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
//arrow function

const printNumbers = (a, b) => {
  // console.log('print from arrow function');
  return a + b;
};
