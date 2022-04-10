//////////STEP #1 Create an array assign the variable katzDeli//////////////
const katzDeli = ["Jerry Rice", "Emmitt Smith", "Will Smith"]

// ///////STEP #2 Create a function for line pass in the array of names katzDeli ///////////////////////

function line(array){
    let i;
    if (i=0){
        console.log("The line is currently empty.")}
        else if(i < array.lentgh){
        {
            console.log ("The line is currently: 1." + array[0] + "2." + array[1] + "3. " + array[3] )
        }
    }
   
    }

    // console.log(1. katzDeli[0], 2. katzDeli[1], 3. katzDeli[2])




line Function (Add in string of Deli member names.)

Input: an array 
Output: returns a string (the string should contain the name of person(1) and their place in line(2) )
if no names are passed into the array default to "The Line is currently empty"


takeANumber Function
Input:  (1) array--(katzDeli) 
        (2) string- "Steve Young", "Troy Aikman", "Jada Pinkett",
        *** The new person needs to be added to the end of the line. Use Array Method .push() 
        *** or Spread operator (...) Method***

function takeANumber(array, name){
    return array.push(name)
}
console.log(`Welcome, ${name}. You are number katzDeli[0]+1 in line.`)

Output: (1) persons name and their positon in line.
        ***  Their position will be the index position in the array + 1

        Example in my string ["Jerry Rice," "Emmitt Smith", "Will Smith"] 
    ***Jerry Rice      Index Position is [0] position in line is 1.***
    ***Emmitt Smith    Index Position is [1] position in line is 2.***
    ***Will Smith      Index Position is [2] position in line is 3.***
    
    When I add in the new people it will be
    *** Steve Young     Index Position is [3] position in line is 4.***
    *** Troy Aikman     Index Position is [4] position in line is 5.***
    *** Jada Pinkett    Index Position is [5] position in line is 6.***   

Output: "Welcome, ("name"). You are number 1 in line."


nowServing- Remove someone from the queue



