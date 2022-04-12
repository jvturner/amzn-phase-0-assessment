// / Represent queue with an empty array

//  Build a line function that takes in and array (Think INPUT/Parameter an array)
//  containing everyone with their current place in line.  If nobody is in line (array.length = 0)
//  it should say (Think console.log) "The line is currently empty.
// example line(katzDeli) "The line is currently: 1. Ada 2. Grace 3. Kent"

// Build takeANumber function 
// 2 arguments (a)-array of currently line of people
// (b)- string of the name of the person joining the end of the line. (Think add to the end of an array)
// (Think Array Methods  array.push() or spread operator [...'existing array', "new element to be added"])
// NOTE the return value of using method array.push() is the length of the new array

// create a function nowServing(array)
// call out or  (console.log) the person at array index position[0]
// remove the person from the front of the array line array.shift() return value is the person
// I just removed from the front of the array.
// if noboby is in line console.log() "There is nobody waiting to be served!"
// So I'm going to iterate through my array if array.length = 0 then I'll console.log the above 'string'

const katzDeli = [];
let array = ['Ada', 'Kent', 'Grace']

function customerLine(array) {
    if (array.length === 0) {
        console.log("The line is currently empty.")
    } else {
        console.log(`The line is currently: 1. ${array[0]} 2. ${array[1]} 3. ${array[2]}`)
    }
}
customerLine(katzDeli);
customerLine(array);

function takeANumber(array, name) {
    let position = array.push(name)
    // console.log(array.push(name))
    console.log(`Welcome, ${name}. You are number ${position} in line.`)
}

takeANumber(array, 'jamond');
takeANumber(array, 'Matz');
takeANumber(array, 'Susan');

function nowServing(array) {
    if (array.length === 0) {
        console.log("There is nobody waiting to be served!")
    } else for (let i = 0; i < array.length; i++) {
        array.shift(array[0])
        console.log(`Currently serving ${array[0]}.`)
    }
}

nowServing (array);
nowServing (array);
nowServing (array);
nowServing (katzDeli);













