function numberBig(number) {
    if (number>100){
        return true;
    } else {
        return false;
    }
}

console.log(numberBig(100));
console.log(numberBig(101));

// Upper produces something

function bouncerBot(maximumVisitors, currentVisitors, age) {
    let enter = ("come in");
    let busy = ("it's too busy now, come back later");
    let tooYoung = ("this is a club for adults");
    let answer;

    if (age<21){
        answer = tooYoung;
    } else if ((currentVisitors+1)>maximumVisitors){
        answer = busy;
    } else {
        answer = enter;
    }
    return answer;
}

console.log(bouncerBot(18, 19, 19));
console.log(bouncerBot(18, 19, 24));
console.log(bouncerBot(25, 19, 37));

// Produces something

let numberArray = [1, 2, 3, 4, 7, 3]
let numberArray1 = [5, 7, 3, 4, 10, 7]
let numberArray2 = [2, 567, 4, 320, 30, 7 ]

function averageNumber(array){
let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum/array.length;
    return Math.round(average);
}

console.log(averageNumber(numberArray));
console.log(averageNumber([5, 6, 4, 3]));
console.log(averageNumber(numberArray1));
console.log(averageNumber(numberArray2));

// Produces something