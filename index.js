// how to define an array | Indexed array
// array literal
let fruits // declaration
fruits = [ "orange", "banana", [12, 13] , "apple" ," ", true, null, undefined, 12] ; // initialization
console.log(fruits);

// less or almost no use
let students = new Array("Shuma", "Ahadi", "Nadim");
console.log(students)

let courses = Array("PHP", "JavaScript", "Python");
console.log(courses)

// How to access an array
//alert(fruits[1])
//alert(courses)
console.log(fruits[2])

// how to assign value to an array index

fruits[1] = "grapes" // assign
fruits[2][2]=14
console.log(fruits[2])


// Hw
// how to define an array
 let friends
friends = ["eva", ["oay,wie"], "prion"];
console.log(friends);

// How to access an array
// alert(friends)
// alert(friends[2])
console.log(friends[0])

// how to assign value to an array index

friends[0] = "win" //assign
console.log(friends[0])

friends[1][2] ="yibo";
console.log(friends[1])


let pet = ["dog", "cat", "zebra", ["panda,bear"], "cow", "sheep", " "];

console.log(pet);
console.log(pet[3]);
pet[1]="tiger"
console.log(pet[1])


// for (let i = 0; i < pet.length; i++) {
//     console.log(pet[i]); 
// }
// let bikes = [
//     ['R15', 'MT', 'FZS'],
//     ['Hornet', 'CBR', 'x-blade'],
//     ['4v', 'Metro'],
//     ['Thriller']
// ]

// bikes[4] = {Suzuki : ['GSXR']};
// console.log(bikes);
let data=[[1,2,3],[a,b,c]];
console.log(data[1][0]);

let arr=new Array(3)