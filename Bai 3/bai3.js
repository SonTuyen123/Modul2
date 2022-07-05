const inventory = [

    { type: "machine", value: 5000 },


    { type: "machine", value: 650 },


    { type: "duck", value: 10 },


    { type: "furniture", value: 1200 },


    { type: "machine", value: 77 }

]


//Cach 1
/* let totalMachineValue = 0;
for (let iterator of inventory) {
    if (iterator.type === "machine") {
        totalMachineValue += iterator.value;
    }
} */
//Cách 2 

function a(sum, item) {
    if (item.type === "machine") {
        sum += item.value;
    }
    return sum;

}
let totalMachineValue = inventory.reduce(a, 0)
console.log(totalMachineValue)