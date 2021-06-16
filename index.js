// Your code here

// function saturdayFun(day ="Saturday",activity = "roller-skate"){
//     console.log(`This ${day}, I want to ${activity}!`);
// }

saturdayFun = (activity = "roller-skate") => {
    return(`This Saturday, I want to ${activity}!`);
}


// did i do this right? 

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}
//mondayWork()


function wrapAdjective(highlight = "*"){   // create this function 
    return function(emphatic = "a hard worker") { // return the previous function AND create a new one
        return `You are ${highlight}${emphatic}${highlight}!` // returned utilized BOTH functions
    }   
}


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