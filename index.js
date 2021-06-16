// Your code here

// defines saturdayFun function declaration as specified
// ✓ function exists
// ✓ uses the default activity 'roller-skate' when no arguments are passed
// ✓ permits the default activity to be overriden
saturdayFun = (activity = "roller-skate") => {
    return(`This Saturday, I want to ${activity}!`);
}


// did i do this right? 

// defines mondayWork function expression as specified
//       ✓ function exists
//       ✓ uses the default activity 'go to the office' when no arguments are passed
//       ✓ permits the default activity to be overriden

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}
mondayWork() //does not have to invoke to pass 

// defines wrapAdjective function according to the specification
//       ✓ function exists
//       ✓ when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//       ✓ when initialized with '||' creates a function that, when called, wraps an adjective in a highlight

function wrapAdjective(highlight = "*"){   // create this function 
    return function(emphatic = "a hard worker") { // return the previous function AND create a new one
        return `You are ${highlight}${emphatic}${highlight}!` // returned utilized BOTH functions
    }     
    
}

// defines an object called Calculator
//       1) has a JavaScript Object called Calculator as a local variable
//       that has a function called add
//         2) Calculator.add exists
//         3) calculates 1 + 3
//       that has a function called subtract
//         4) Calculator.subtract exists
//         5) calculates 1 - 3
//       that has a function called multiply
//         6) Calculator.multiply exists
//         7) calculates 1 * 3
//       that has a function called divide
//         8) Calculator.divide exists
//         9) calculates 10 / 5
//     Defines a function called actionApplyer
//       10) exists
//       receives two arguments: a starting integer and an array of functions
//         11) returns the given starting point, unchanged, when the array is empty
//         12) Given 13, returns 4 after being acted on by several functions


const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}


// Defines a function called actionApplyer
// ✓ exists
// receives two arguments: a starting integer and an array of functions
//   ✓ returns the given starting point, unchanged, when the array is empty
//   ✓ Given 13, returns 4 after being acted on by several functions



function actionApplyer(start, array) {
    let num = start
    for (let a = 0; a < array.length; a++ ){
    num = array[a](num)
    }
    return num
}


// wrapAdjective("||")("developer");

// "You are ||developer||!"

// wrapAdjective()("an engineer")

// "You are *an engineer*!"

// wrapAdjective()

// "You are *a hard worker*!"