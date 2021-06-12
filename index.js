// Your code here
function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = "go to the office") {
    return `This Monday, I will ${str}.`
}

function wrapAdjective(string = "*") {
    return function(str = "special"){
        return `You are ${string}${str}${string}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(int, array) {
    if (array === []){
        return int
    } else {
        
    }
}