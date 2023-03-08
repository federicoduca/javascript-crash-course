// var, let, const

let age = 30;
const name = "john";
const rating = 4.5;
const isCool = true;
const y = undefined
let z

// template
console.log(
    `template ${isCool}`
);

/*
multi line comments
*/

// arrays
const numbers = new Array(1, 2, 3)
console.log(numbers)

const fruits = ['apples', 'oranges', 'pears']
fruits.push('mangos')
fruits.unshift('pepas')
fruits.pop()
console.log(Array.isArray(fruits))
console.log(Array.isArray('hello'))
console.log(fruits.indexOf('apples'))
console.log(fruits[0])


// Obejcts
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 30,
    address: {
        street: 'corrientes y callao',
        city: 'caba'
    }
}

console.log(person.firstName);
console.log(person.address.city);

const { firstName, lastName, address } = person
console.log(address);

const todos = [
    {
        id: 1,
        text: 'take out',
        isCompleted: true
    }, {
        id: 2,
        text: 'lunch',
        isCompleted: false
    }, {
        id: 3,
        text: 'meet',
        isCompleted: true
    },
]
console.log(todos[0]);
console.log(JSON.stringify(todos))

// Loops
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 0
while (i < 10) {
    console.log(i);
    i++
}

for (let todo of todos) {
    console.log(todo)
}

// forEach, map, filter

todos.forEach(function (todo) {
    console.log(todo.text);
})

const todoText = todos.map(function (todo) {
    return todo.text
})
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true
}).map(function (todo) {
    return todo.text;
})

console.log(todoCompleted)

// Conditionals
console.log("conditionals");

const x = 10;
const xStr = "10";

if (x === 10) {
    console.log('x is 10')
} else if (x > 10) {
    console.log('x mayor 10');
} else {
    console.log('x menor que 10');
}

// xStr == 10 != x === 10

const color = x > 10 ? 'red' : 'blue'

switch (color) {
    case 'red':
        console.log('color is red');
        break
    case 'blue':
        console.log('color is blue');
        break
    default:
        console.log('no red, no blue');
        break
}

// Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5))

const addNum = num1 => num1 + 5

// Constructor function
function Person(firstName, lastName, dob = '4-3-1990') {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getBirthYear = function () {
        return this.dob.getFullYear()
    }
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

// Class 
class Persona {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

const person1 = new Persona('john', 'dow')
const person2 = new Persona('leo', 'messi')

console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1);

