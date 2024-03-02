// const tableNumber = +prompt('enter any number');


// if (isNaN(tableNumber) === true) {
//     console.log('Maalik number deda!');
// } else {
//     console.log(`${tableNumber} * 1 = ${tableNumber * 1}`);
//     console.log(`${tableNumber} * 2 = ${tableNumber * 1}`);
//     console.log(`${tableNumber} * 3 = ${tableNumber * 1}`);
//     console.log(`${tableNumber} * 4 = ${tableNumber * 4}`);
//     console.log(`${tableNumber} * 5 = ${tableNumber * 5}`);
//     console.log(`${tableNumber} * 6 = ${tableNumber * 6}`);
//     console.log(`${tableNumber} * 7 = ${tableNumber * 7}`);
//     console.log(`${tableNumber} * 8 = ${tableNumber * 8}`);
//     console.log(`${tableNumber} * 9 = ${tableNumber * 9}`);
//     console.log(`${tableNumber} * 10 = ${tableNumber * 10}`);
// }


























// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5*i}`);
// }























// for (let i = 1; i <= 100; i++) {
//     console.log(`outer loop ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// console.log('console after loop');



















// const fruit = ['apple' , 'banana' , 'orange' , 'watermelon' , 'strawberry' , 'melon' , 'grapes' , 'pineapple' , 'guava'];
// const div = document.querySelector('div');

// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
//     div.innerHTML = div.innerHTML + `<h1>${fruit[i]}</h1>`
// }



const fruit = ['apple' , 'banana' , 'orange' , 'watermelon' , 'strawberry' , 'melon' , 'grapes' , 'pineapple' , 'guava'];
const select = document.querySelector('select');

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
    select.innerHTML += `<option>${fruit[i]}</option>`
}


//backtick string
//push and splice
//loop , while and do while










