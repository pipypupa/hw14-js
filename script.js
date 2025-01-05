const users = [
    {name: "Alice", eyeColor: "green", gender: "female", isActive: false, email: "alice@example.com", age: 22},
    {name: "Bob", eyeColor: "hazel", gender: "male", isActive: true, email: "bob@example.com", age: 28},
    {name: "Charlie", eyeColor: "blue", gender: "male", isActive: true, email: "charlie@example.com", age: 19},
    {name: "Diana", eyeColor: "gray", gender: "female", isActive: false, email: "diana@example.com", age: 25},
    {name: "Eve", eyeColor: "amber", gender: "female", isActive: true, email: "eve@example.com", age: 18},
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
const findUserEmail = users.find((user) => user.email === "eve@example.com");
console.log(findUserEmail); 

// Завдання 6
const minAge = 20;
const maxAge = 30;
const findUserAge = users.filter((user) => user.age >= minAge && user.age <= maxAge);
console.log(findUserAge); 
