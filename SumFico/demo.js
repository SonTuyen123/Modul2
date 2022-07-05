var numb = 20;
var total = 1;
var arr = [0, 1];
function totalFibonacci(num) {
    if (num > 2) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        total += arr[arr.length - 1] + arr[arr.length - 2];
        // console.log(arr)
        totalFibonacci(num - 1);
    }
    return total;
}
var totalFibo = totalFibonacci(numb);
console.log(totalFibo);
