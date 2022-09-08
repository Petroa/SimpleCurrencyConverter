let myArray = [];

function checkEvenOrOdd(numbers) {
    // write your code here
    for(let x of numbers) {

            if (x === 0) {
                break;
            }
            else if ((x % 2) === 0) {
                console.log("even");
                continue;
            }
            else {
                console.log("odd");
                continue;
            }
        }
    }
checkEvenOrOdd(myArray);
