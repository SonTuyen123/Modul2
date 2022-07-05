let numb: number = 20;
let total = 1
let arr = [0, 1]

function totalFibonacci(num: number): number {
    if (num > 2) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        total += arr[arr.length - 1] + arr[arr.length - 2]
        // console.log(arr)
        totalFibonacci(num - 1)
    }
    return total
}

let totalFibo: number = totalFibonacci(numb)
console.log(totalFibo);