//let myArray = [1,1,0,1];
let mySum = 0;
function sum(numbers) {
    // write your code here
    for (x of numbers){
        // если элем равен 0
        // стоп цикл брейк
        if (x === 0){
            break;
        }
        mySum += x;
    }
    return mySum;
    console.log(mySum);
}
//sum(myArray);