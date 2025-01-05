const users = [
    {name: "Mango", eyeColor: "brown", gender: "female", isActive: false, email: "mango@email.com", age: 15},
    {name: "Poly", eyeColor: "blue", gender: "female", isActive: true, email: "poly@email.com", age: 19},
    {name: "Kiwi", eyeColor: "brown", gender: "male", isActive: true, email: "kiwi@email.com", age: 16},
    {name: "Ajax", eyeColor: "cyan", gender: "male", isActive: false, email: "ajax@email.com", age: 21},
    {name: "Chelsy", eyeColor: "green", gender: "female", isActive: true, email: "chelsy@email.com", age: 13},
];

// Завдання 1
const allUsers = users.map((user) => user.name);
console.log(allUsers); 

// Завдання 2
const eyesColors = users.filter((user) => user.eyeColor === "blue");
console.log(eyesColors);

// Завдання 3
const findUserGender = users.filter((user) => user.gender === "male");
console.log(findUserGender.map((user) => user.name)); 

// Завдання 4
const findOfflineUser = users.filter((user) => !user.isActive);
console.log(findOfflineUser);

// Завдання 5
const findUserEmail = users.find((user) => user.email === "chelsy@email.com");
console.log(findUserEmail); 

// Завдання 6
const minAge = 10;
const maxAge = 25;
const findUserAge = users.filter((user) => user.age >= minAge && user.age <= maxAge);
console.log(findUserAge); 
