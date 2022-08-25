// Tornike Shvangiradze

// Task 1

let sampleObject = {
    isItarable: false,
    sampleArray: [12, 63, 21, 34, 98, 57],
};

function LogOrNot(trueOrFalse) {
    let objArr = sampleObject.sampleArray;
    if(trueOrFalse){
        for (let i = 0; i < objArr.length; i++) {
            console.log(objArr[i]);
        }
    }else{
        console.log("provided array isn't itarable");
    }
};

LogOrNot(sampleObject.isItarable);

// Task 2

function checkPythagoras(a,b,c){
    console.log((a * a + b * b) === c * c || b * b === (c * c - a * a) || a * a === (c * c - b * b));
};

checkPythagoras(3, 4, 5);

// Task 3

const test3Arr = [2, 14, 25, 75, 11, 6];

function task3Fun(par) {

    let arrayLen = test3Arr.length;

    let minCount = 0;
    let maxCount = 0;

    let minNum;
    let maxNum;

    for(let i = 0; i < arrayLen; i++){
        for (let minI = 0; minI < arrayLen; minI++) {
            if (test3Arr[i] <= test3Arr[minI]) {
                minCount++;
            }else {
                minCount = 0;
            }
        }
        if (minCount === 6) {
            minNum = test3Arr[i];
        }
    }

    for (let i = 0; i < arrayLen; i++) {
        for (let maxI = 0; maxI < arrayLen; maxI++) {
            if (test3Arr[i] >= test3Arr[maxI]) {
                maxCount++;
            }else{
                maxCount = 0;
            }
        }
        if (maxCount === 6) {
            maxNum = test3Arr[i];
        }
    }

    console.log(`min value is ${minNum} and Max value is ${maxNum}`);
}

task3Fun(test3Arr);

// Task 4

let acute = 0;
const acutearr = [];

while(true){
    acutearr.push(acute);
    acute++;
    if (acute == 89) break;
}



let obtuse = 90;
const obtuseArr = [];

while(true){
    acutearr.push(acute);
    obtuse++;
    if (acute == 179) break;
}