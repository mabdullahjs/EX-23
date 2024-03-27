// console.log('hello world!');

// ES6
//ECMA SCRIPT

// const btn = document.querySelector('#btn');

// function hello (){
//     console.log('btn clicked')
// }

// btn.addEventListener('click' , hello)

// hello()








// const select = document.querySelector('#select');

// select.addEventListener('change' , function(){
//     console.log(select.value , 'onchange function called');
// })







// var, let, const
// Template Literals
// ternary operators
// Object Methods (keys,values,freez,entries)
// spread Operators
// rest operators
// destructuring
// higher order
// callback function
// Arrow function
// Closures




















//var
//redeclare true
//reassign true
//functional scope

//let
//redeclare false
//reassign true
//block scope

//const
//redeclare false
//reassign false


// var username = 'abdullah';
// var username = 'usman';
// username = 'ammar';
// console.log(username);


// let username = 'abdullah';
//  username = 'usman'

// const username = 'abdullah';



// var
// function hello (){
//     if(true){
//         var username = 'abdullah';
//     }
//     console.log(username);
// }
// hello()

// let
// function hello (){
//     if(true){
//         let username = 'abdullah';
//     }
//     console.log(username);
// }
// hello()






















// Template Literals

// const username = 'abdullah';
// const age = 20;
// // console.log('my name is ' + username + ' and my age is ' + age)

// console.log(`my name is ${username} and my age is ${age}`);
























// ternary operators

// const bankBalance = 120000;

// if(bankBalance > 200000){
//     console.log('shaadi Mubarak');
// }
// else{
//     console.log('katt gaya!');
// }

// bankBalance > 200000 ? console.log('shaadi Mubarak') : bankBalance > 100000 ? console.log('Dekha jayega'): console.log('katt gaya')





















//spread operator


// const arr = ['apple' , 'banana' , 'orange'];
// const arr2 = [...arr , 'watemelon' , 'guava'];
// console.log(arr2);


// const obj = {
//     username:'abdullah',
//     age:20
// }

// const obj2 = {
//     obj,
//     isLoggedIn: true
// }

// console.log(obj2);



//rest operator

// function hello(...name){
//     console.log(name);
// }

// hello('usman' , 'abdullah' , 'ammar' , 'uzair')



































//destructuring

const obj = {
    username: 'abdullah',
    age: 20,
    isLoggedIn: true,
    moreUser:{
        names:'usman'
    }
}

// // console.log(obj.age)
// const {username , age , isLoggedIn, moreUser , fathername = 'ajmal'} = obj;
const {username , ...rest} = obj;
// const {names} = moreUser
console.log(rest);











// const arr = ['apple', 'banana', 'orange', 'watermelon'];

// const [a, b, , c] = arr;
// console.log(c);

































































































