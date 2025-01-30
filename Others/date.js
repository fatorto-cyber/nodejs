var today = new Date()
console.log(today) //2025-01-13T21:31:49.552Z

//Timestamp
var now = Date.now()
console.log(now) //1736803909565

console.log(`Day : ${today.getDate()}`)
console.log(`Date : ${today.toDateString()}`)
console.log(`Time : ${today.getTime()}`)
console.log(`Month : ${today.getMonth() + 1}`)