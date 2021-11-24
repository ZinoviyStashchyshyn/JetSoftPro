
// 1. Compute the exponent of a number (using recursion)
//    8^2 = 8 x 8 = 64


const exponentRec = (num, expo) => {
    if (expo === 0) return 1
    return num * exponentRec(num, expo - 1);
};
// console.log(exponentRec(8, 2));



// 2. Write functions min and max that will find min and max number in array using apply


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const minNum = (arr) => (Math.min.apply(Math, arr));
// console.log(`minNumebr: ${minNum(numbers)}`);

const maxNum = (arr) => (Math.max.apply(Math, arr));
// console.log(`maxNumber: ${maxNum(numbers)}`);



// 3. write a function displayCarDetails that will receive as argument ownerName
//    and return a string with car registration number, branch and color.
//    Please make examples for three different cars


// with call

const carOne = {
    registrationNumber: "BC0055EH",
    brand: "BMW",
    color: "silver"
};

const carTwo = {
    registrationNumber: "AC1765KH",
    brand: "Mercedes",
    color: "black"
};

const carThree = {
    registrationNumber: "AA0077II",
    brand: "Porsche",
    color: "red"
};

function displayCarDetails(ownerName) {
    console.log(`Car: ${this.brand} | Registration number: ${this.registrationNumber} | Color: ${this.color} | Owner: ${ownerName}`);
}

// displayCarDetails.call(carOne,"Max");
// displayCarDetails.call(carTwo,"Taras");
// displayCarDetails.call(carThree,"Serhiy");


// with function constructor

function Cars(brand, registrationNumber, color) {
    this.brand = brand;
    this.registrationNumber = registrationNumber;
    this.color = color;
    this.displayCarDetails = function (ownerName) {
        console.log(`Car: ${this.brand} | Registration number: ${this.registrationNumber} | Color: ${this.color} | Owner: ${ownerName}`);
    }
    
}
// const bmw = new Cars("BMW","BC0055EH", "silver")
// bmw.displayCarDetails("Max")
//
// const mercedes = new Cars("Mercedes","AC1765KH", "black")
// mercedes.displayCarDetails("Taras");
//
// const porsche = new Cars("Porsche","AA0077II", "red")
// porsche.displayCarDetails("Serhiy");



// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that


function greet(person) {
    if (person.name === 'amy') {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}
const amy = {name: 'amy'};
// console.log(greet(amy));



// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)
// for (var i = 0; i < 4; i++) {setTimeout(() => console.log(i), 0)}

// let

// for (let i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// immediately invoked function

// for (var i =0; i<4; i++){
//     ((i)=>setTimeout(()=>console.log(i),0))(i);
// }








