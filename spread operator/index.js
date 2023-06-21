const sum = (a, b, c) => {
    console.log(a + b + c);
}
const nums = [1,2,3]

sum(...nums)




// let object = {
//     address: 'Lagos , in island area',
//     job: 'web developer',
//     sex: 'female',
//     Brother : {
//         name: 'john',
//         location: ' owerri',
//         job: 'designer',
//     }
// }

// let updatedObject = {
//     ...object,
//     currentLocation: 'Zimbabwe',
//     Brother : {
//         ...object.Brother,
//         status: 'single'
//     }
// }

// console.log(object);
// console.log(updatedObject);


// let object = [
//     {id: 3, name: 'john'},
//     {id: 1, name: 'peter'},
//     {id: 7, name: 'mike'},
// ]

// let nwObject = {id: 2, name: 'james'}

// const updatedObject = [...object, ...nwObject]

// console.log(object);
// console.log(updatedObject);