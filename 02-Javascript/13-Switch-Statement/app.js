// console.log('hello world');


//hoisting
// var username;
// console.log(username);
// var username = 'abdullah';
// console.log(username);

// var
// console.log(username);
// let username = 'abdullah';

// greetUser()
// function greetUser(){
//     console.log('hello world');
// }

//arrow function , let , const wo hoisting support nahi krta


























//switch case


// let grade = 'C';
// if(grade === 'A'){
//     console.log('A grade');
// }
// else if(grade === 'B'){
//     console.log('Grade B');
// }
// else if(grade === 'C'){
//     console.log('Grade B');
// }
// else if(grade === 'D'){
//     console.log('Grade B');
// }
// else{
//     console.log('Fail');
// }


// switch(grade){
//     case 'A':
//         console.log('A grade');
//         break
//     case 'B':
//         console.log('B grade');
//         break
//     case 'C':
//         console.log('C grade');
//         break
//     default : 
//     console.log('Fail');
// }







// const age = 18;

// if(age < 18){
//     console.log('underage');
// }
// else if(age >= 18 && age <= 65){
//     console.log('adult');
// }
// else{
//     console.log('Allah Allah kro');
// }


// switch (true) {
//     case (age < 18):
//         console.log('underage');
//         break
//     case (age >= 18 && age <= 65):
//         console.log('adult');
//         break
//     default:
//         console.log('Allah Allah kro');
// }


























// set timeout && set Interval

// function greetUser() {
//     console.log('hello abdullah');
// }
// setTimeout(function (){
//     console.log('hello world');
// } , 2000)

// let greetTimeout = setTimeout(greetUser , 2000)


// function clears(){
//     clearTimeout(greetTimeout)
// }





































// const interval = setInterval(function(){
//     console.log('Hello world');
// } , 1000)

// function clears (){
//     clearInterval(interval)
// }

















//stopwatch

// let second = 0
// const p = document.querySelector('p');

// const timesecond = setInterval(function (){
//     second = second + 1;
//     console.log(second);
//     p.innerHTML = second
// } , 1000)


// function clears (){
//     clearInterval(timesecond)
// }










// const obj = {
//     username : 'abdullah',
//     nestedObj: {
//         name2: 'usman',
//         nestedObj2: {
//             name3: 'uzair'
//         }
//     }
// }
// console.log(obj.nestedObj.nestedObj2.name3);






















const p = document.querySelector('p');


// let students = [
//     { name: "Alice", age: 20, grade: "A" },
//     { name: "Bob", age: 22, grade: "B" },
//     { name: "Charlie", age: 21, grade: "C" }
// ];

// for(let i = 0; i < students.length; i++){
//     console.log(students[i].name);
//     // p.innerHTML += students[i].name
// }


























