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

function showVal(){
    console.log(input.value);
    head.innerHTML = input.value
}

function clearHead(){
    head.innerHTML = ''
}














