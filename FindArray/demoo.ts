let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]

function findLackNumberInArray(inPutArr) {
    let NotFoundNum: number[] = [];
    for (let i = 0; i < 10; i++) {
        if (inPutArr.indexOf(i) === -1) {
            NotFoundNum.push(i);
        }
    }
    return NotFoundNum;
}

let outPut = findLackNumberInArray(numbers)

console.log(outPut)