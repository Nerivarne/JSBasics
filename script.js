console.log("Sandra");
let myVariable = false;
if (myVariable === false) {
  console.log('The condition has been evaluated to true');
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 1; i < 11; i++) {
    console.log(i);
}
for (let i = 2; i < 21; i+=2) {
    console.log(i);
}
let printNumbersTill = num => {
    for (let a = 1; a <= num; a++) {
        console.log(a);     
    }
}
printNumbersTill(20)
printNumbersTill(15)

let getGreetingTo = name => {
    console.log("Hello " + name + "!");
}

getGreetingTo("Mark")

let printValues = array => {
    for (let b = 0; b < array.length; b++) {
        console.log(array[b]);
    }
}
printValues([0, 3, 6, 7, 9])

let myNumbers = [0, 3, 6, 7, 9]

myNumbers.forEach((number) => {
    console.log(number);
})


