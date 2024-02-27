console.log('hello world');

// var para = document.querySelector('#lorem');

// function changeElement() {
//     if (para.innerHTML === 'Lorem ipsum') {
//         para.innerHTML = 'changed through javascript'
//     }else{
//         para.innerHTML = 'Lorem ipsum'
//     }
// }

// var input = document.querySelector('.input');

// console.log(input.value);
// function getInputValue(){
//     console.log(input.value);
//     input.value = ''
// }





















var input = document.querySelector('.value');
var head = document.querySelector('.head');

function showVal() {
    console.log(input.value);
    head.innerHTML = input.value
}

function clearHead() {
    head.innerHTML = ''
}














// 400
// 4 form field bnaingi or 4 ma chem marks, phy,isl,urdu aik button hoga jaisa hi us button pa click hoga percentage nikaalka neecha h1 ma show krwani ha.















var physicsMarks = document.querySelector('#physics');
var chemistryMarks = document.querySelector('#chemistry');
var islamiatMarks = document.querySelector('#islamiat');
var urduMarks = document.querySelector('#urdu');
var obtainedspan = document.querySelector('#obtainedmarks');
var percentagespan = document.querySelector('#percentage');
var totalMarks = 400;


function calculatePercentage (){
    var obtainedMarks = +physicsMarks.value + +chemistryMarks.value + +islamiatMarks.value + +urduMarks.value
    console.log(obtainedMarks)
    obtainedspan.innerHTML = obtainedMarks;

    var percentage = obtainedMarks / totalMarks * 100;
    percentagespan.innerHTML = percentage + '%'
} 














