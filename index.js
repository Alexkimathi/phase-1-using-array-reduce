const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let sum = 0
const totalBatteries = batteryBatches.reduce((value1 ,value2)=>value1+value2, sum)
