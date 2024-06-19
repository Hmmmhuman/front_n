// 2. let & const

// const number = [1, 2, 3, 4, 5];
// number[2] = 10;
// number[(6, 7, 8, 9)];
// console.log(number);

// const john = {
//   name: "john doer",
//   age: 30,
//   isActive: true,
// };
// john.age = 31;
// console.log(john);

// let string1 =
//   "hi, nama saya" + john.name + ", umur saya " + john.age + " tahun";
// console.log(string1);

// let string2 = `hi, nama saya ${john.name} umur saya ${john.age} tahun`;
// console.log(string2);

// 3.Arrow function
// function gretings() {
//   return "Hello World";
// }
// const gretings1 = () => {
//   return "Hello world";
// };

//implicit return value
// const gretings2 = (name) => `Hello world ${name}`;

//penggunaan arrow function pada callback function
// let numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((item) => item * 5);
// console.log(output);

// 4. default parameter
// const gretings3 = (name, age) => {
//   if (name === undefined) {
//     name = "john",
//   }else(age === undefined) {
//     age = 30
//   }
//   }
//   `hi, nama saya ${john.name} umur saya ${john.age} tahun`;
// };
// console.log(gretings3());

const gretingss = (name = "john", age = 30) =>
  `hi, nama saya ${name} umur saya ${age} tahun`;
console.log(gretingss());
