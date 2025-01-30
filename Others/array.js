 // var a1 = [1, 2, 3, 4]
var a1 = new Array(1, 2, 3, 4)
console.log(a1)
console.log(a1[0])
console.log(a1[1])
console.log(`Length ${a1.length}`)
console.log(a1[4]) //undefined

a1.push(5)
console.log(a1)
a1[5] = 6
a1.pop() // remove 6, last element
a1[10] = 10
console.log(a1)
console.log(`Length ${a1.length}`)

a1.forEach( (e) => {
    console.log(e)
})

for(i=0; i< a1.length; i++){
    console.log(`${i} - ${a1[i]}`)
}

//Desctucturing
// Co-ordinates for Seneca's Newnham Campus
let position = [43.796, -79.3486];

// Separate the two values into their own unique variables.

// Version 1 - index notation
var lat = position[0];
var lng = position[1];

// Version 2 - destructure
var [lat, lng] = position
console.log(lat, lng)
