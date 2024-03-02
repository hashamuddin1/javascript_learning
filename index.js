// var: ye ham redeclare bhi krsaktay hay aur value change bhi
var firstVar = 23;
firstVar = 88; // chnge value
var firstVar = 59; //redclare
//console.log(firstVar);

// let: ye redclare nhi hota but value change hoti hay
let secondVar = 54;
secondVar = 87;
//let secondVar = 12; //error
//console.log(secondVar);

//const: na tw redclare aur na hi value change
const thirdVar = 55;
//const thirdVar=5; //error
//thirdVar = 77; //error
//console.log(thirdVar);

//print statement
let firstName = "hasham";
//console.log(firstName);
let obj1 = {
  firstName: "hasham",
  lastName: "uddin",
  dob: "2000-09-07",
};

//console.table(obj1);
//console.warn(firstName);
//console.error("there is a error");

let studentName = "Azhar";
let studentLastName = "Uddin";
//console.log(`Student Name is ${studentName} ${studentLastName}`); // this is string literals

// Arithmetic operator

// +
//console.log(22 + 77);
//console.log("22" + "77"); 2277
//console.log(22 + "77"); 2277;

// -
//console.log(33 - 90); //-57
//console.log("33" - "90"); //-57
//console.log(33 - "90"); //-57

// *
// console.log(33 * 90); //2970
// console.log("33" * "90"); //2970
// console.log(33 * "90"); //2970

// /
// console.log(33 / 90); //0.36666666666666664
// console.log("33" / "90"); //0.36666666666666664
// console.log(33 / "90"); //0.36666666666666664

// Data Types

// string
const strData = "javascript";
//console.log("strData", typeof strData);

// number
const numberData = 568595;
//console.log(`numberData ${typeof numberData}`);

// boolean
const boolData = false;
//console.log(`boolData ${typeof boolData}`);

// array
const arrayData = [1, 8, 5];
//console.log(`arrayData ${typeof arrayData}`);

// object
const objData = { langName: "javascript" };
//console.log("objData", typeof objData);

// null
const nullData = null;
//console.log("nullData", typeof nullData);

// undefined
const undData = undefined;
//console.log("undData", typeof undData);

// homework
//console.log(3 > 2 > 1);  why it is false? jab k true hona chahye

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

const studentArr = ["hasham", "ali", "ahmed", "bilal"];
// for (let i = 0; i < studentArr.length; i++) {
//   console.log(studentArr[i]);
// }

const studentArrOfObj = [
  {
    firstName: "hasham",
    secondName: "uddin",
    dob: "2000-09-07",
  },
  {
    firstName: "azhar",
    secondName: "khan",
    dob: "2001-12-07",
  },
  {
    firstName: "ali",
    secondName: "ahmed",
    dob: "2000-09-08",
  },
];

for (let j = 0; j < studentArrOfObj.length; j++) {
  // console.table(studentArrOfObj[j]);
}

let i = 2;
while (i < studentArrOfObj.length) {
  //console.table(studentArrOfObj[i]);
  i++;
}

//console.log("from while loop", i); // no error print krwa dega because iska scope globally poori file tak ka hay
//console.log("from for loop", j);  // error because iska scope sirf for ki body k andar tak ka hay

// Methods Of Array

// push
// sab se akhiri may insert krdeta hay.

const employeeData = ["hasham", "azhar", "ali"];
//console.log("before push", employeeData);
employeeData.push("khalid");
//console.log("after push", employeeData);

//pop
// akhiri walay ko remove krdeta hay
employeeData.pop();
//console.log("after pop", employeeData);

//includes
// agar hamay maloom krna ho k kia ye element array may mojood hay ya nhi
// agar mojood hay tw true wrna false
// console.log(employeeData.includes("ahmed"));
// console.log(employeeData.includes("hasham"));

//map
// agar saray element may koi operation perform krna ho
// original array remains same
const numArray = [2, 3, 99, 77];
// console.log(numArray.map((num) => num * 10));
// console.log(numArray);

//filter
// agar array may koi filteration krni ho
// original array remain same
// console.log(numArray.filter((num) => num > 30));
// console.log(numArray);

//reference of value
let var1 = 5;
let var2 = var1;
var2 = 86;
// console.log(var1);
// console.log(var2);

// refrence of location
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr2.push(88);
// console.log(arr1);
// console.log(arr2);

// copy of array
let arr3 = Array.from(arr1);
//console.log(arr3);
arr3.push(153);
//console.log(arr3);

let obj2 = {
  firstName: "hasham",
  lastName: "uddin",
};
let obj3 = Object.assign({}, obj2);
//console.log(obj3);

// print all keys
//console.log(Object.keys(obj3));
// print all values
//console.log(Object.values(obj3));

// logic building
const arrNum = [2, 5, 6, 0, -5, -2, 10, 8];
// console.log(Math.max(...arrNum));
let maxNum = 0;
for (let i = 0; i < arrNum.length; i++) {
  if (maxNum < arrNum[i]) {
    maxNum = arrNum[i];
  }
}
// console.log(maxNum);

//Task

// 1- Apnay ek odd number ki array leli.. aur usme se middle element
// nikalna hay without using any built in method
// 2- Apnay array ki length maloom krni hay

const arr4 = [1, 8, 5, 6, 7];

let obj4 = {
  firstName: "hasham",
  lastName: "uddin",
  firstName: "azhar",
};

obj4.dob = "2000-09-07";
obj4["age"] = 23;
obj4["age"] = 85;
// console.log(obj4);

// Task 1

// create array
let arr = [1, 3, 8];
// create lenth to check the length of the array
let length = arr.length;
// - the no of array index and / by 2
let midInd = (length - 1) / 2;
// check midnumber or index number
let midNum = arr[midInd];
// console.log(midNum);

//task 2
// create array
let arrCount = [1, 8, 9, 6, 5, 5];

// set counter to count the array elements
let count = 0;

// for loop for check the index
for (let i = 0; i < arrCount.length; i++) {
  count++;
}
// console.log(count);

const arrNum1 = [-7, -11, -100, -5, -1, -45];
let maxNum1 = arrNum1[0]; //-7
for (let i = 0; i < arrNum1.length; i++) {
  if (maxNum1 < arrNum1[i]) {
    maxNum1 = arrNum1[i];
  }
}
//console.log(maxNum1);

//if else
// const num1 = 5;
// if (num1 > 3) {
//   console.log("greater than 3");
// } else {
//   console.log("less than 3");
// }

let num2 = false;
// null, undefined, false
// if (!num2) {
//   console.log("value not given");
// } else {
//   console.log("value given");
// }

let num3 = 55;
// if (num3 > 10 || num3 < 40 || num3 < 20) {
//   console.log("true");
// } else {
//   console.log("false");
// }

const marks = 89;
// <50 fail
// 50 - 60 D
// 61 - 70 C
// 71 - 80 B
// 81 -90 A
// 91 - 100 A1

// if (marks >= 91 && marks < 100) {
//   console.log("A1 Grade");
// } else if (marks >= 81 && marks < 90) {
//   console.log("A Grade");
// } else if (marks >= 71 && marks < 80) {
//   console.log("B Grade");
// } else if (marks >= 61 && marks < 70) {
//   console.log("C Grade");
// } else if (marks >= 50 && marks < 60) {
//   console.log("D Grade");
// } else {
//   console.log("F Grade");
// }

// TASK
const userData = [
  {
    emailAddress: "hasham1@yopmail.com",
    password: "12345678",
    fullName: "hasham",
  },
  {
    emailAddress: "hasham2@yopmail.com",
    password: "123456789",
    fullName: "hasham1",
  },
  {
    emailAddress: "hasham2@yopmail.com",
    password: "12345678910",
    fullName: "hasham2",
  },
];

// const userEmail = "hasham2@yopmail.com";
// const userPassword = "12345678910";

const num4 = "4";
// if (num4 === "4") {
//   // value is same but data type is different
//   console.log("Number 4");
// } else {
//   console.log("something went wrong");
// }

const UserData = [
  {
    Email: "ba6329728@gmail.com",
    Password: "12345",
    FirstName: "Bushra_Ali",
  },
  {
    Email: "bushraalisamoon@gmail.com",
    Password: "54321",
    FirstName: "Bushra",
  },
  {
    Email: "sidraali@gmail.com",
    Password: "09876",
    FirstName: "Sidra_Ali",
  },
];
const userEmail = "bushraalisamoon@gmail.com";
const userPassword = "54321";

let output = "Invalid Credentials";

for (let i = 0; i < UserData.length; i++) {
  if (
    userEmail === UserData[i].Email &&
    userPassword === UserData[i].Password
  ) {
    output = UserData[i].FirstName;
  }
}

// console.log(output);

// arrow function

let num5 = 3;
let num6 = 88;

// Arrow function without arguments
const sumNum = () => {
  const num7 = 44;
  return num7 + num5 + num6;
};

const result = sumNum();
// console.log(result);

// Arrow function with arguments
const printName = (firstName, lastName) => {
  return `Your Full Name is ${firstName} ${lastName}`;
};

const result1 = printName("hasham", "uddin");
// console.log(result1);

const checkAge = (age) => {
  if (age >= 18) {
    return `You are valid`;
  } else {
    return `You are not valid`;
  }
};

const result2 = checkAge(45);
// console.log(result2);

// Rest Operator
const printProduct = (firstName, lastName, ...args) => {
  return `${firstName} ${lastName} has ${args} products`;
};

const result3 = printProduct(
  "hasham",
  "uddin",
  "shampoo",
  "chips",
  "shampoo",
  5,
  true,
  "chips"
);
// console.log(result3);

const ownerData = (firstName) => {
  if (firstName === "hasham") {
    return printProduct(
      "hasham",
      "uddin",
      "shampoo",
      "chips",
      "shampoo",
      5,
      true,
      "chips"
    );
  }
};

const result4 = ownerData("hasham");
//console.log(result4);

// Task
// 4 3 2
// ek function banana hay
// agar user 4 day tw 3 aur 2 ka sum print hojai
// lekin agar 3 day tw 4 aur 2 sum print hojai
// lekin agar 2 day tw 4 aur 3 sum print hojai
// isme koi bhi if else else if use nhi krsaktay ternary operator, switch case.

// Nodejs

// Hoisting
// console.log(node);
let node = "Nodejs";

// Asynchronous Function
// Non-blocking I/O
// Single thread
console.log("first");
console.log("second");
setTimeout(() => {
  console.log("third");
}, 3000); // 3 seconds // Asynchronous function ( time taken function )
console.log("fourth");
console.log("fiveth");
setTimeout(() => {
  console.log("sixth");
}, 1000);
console.log("seventh");
setTimeout(() => {
  console.log("ninth");
}, 2000);

// TASK

// let arr=['g','a','c','x','m']
// ['a','c','g','m','x']
// without using any builtin method

// dynamic array
