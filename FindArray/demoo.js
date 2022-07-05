var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
function findLackNumberInArray(inPutArr) {
    var NotFoundNum = [];
    for (var i = 0; i < 10; i++) {
        if (inPutArr.indexOf(i) === -1) {
            NotFoundNum.push(i);
        }
    }
    return NotFoundNum;
}
var outPut = findLackNumberInArray(numbers);
console.log(outPut);
