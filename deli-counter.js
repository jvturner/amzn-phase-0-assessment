// / Represent queue with an empty array

const katzDeli = [];

//  Build a line function that takes in and array (Think INPUT/Parameter an array)
//  containing everyone with their current place in line.  If nobody is in line (array.length = 0)
//  it should say (Think console.log) "The line is currently empty.
// example line(katzDeli) "The line is currently: 1. Ada 2. Grace 3. Kent"

let array = ['Ada','Kent', 'Grace']
function customerLine(array) {
    if (array.length === 0) {
        console.log("The line is currently empty.")
    } else{
        console.log(`The line is currently: 1. ${array[0]} 2. ${array[1]} 3. ${array[2]}`)
    }
}

customerLine(katzDeli);
customerLine(array);


// Build takeANumber function 
// 2 arguments (a)-array of currently line of people
// (b)- string of the name of the person joining the end of the line. (Think add to the end of an array)
// (Think Array Methods  array.push() or spread operator [...'existing array', "new element to be added"])

// function takeANumber(array, name) {
//     let position = array.push(name)
//     console.log(array.push(name))
//     console.log(`Welcome, ${name}. You are number ${position} in line.`)
// }
// NOTE the return value of using method array.push() is the length of the new array

// takeANumber(array, 'jamond');









