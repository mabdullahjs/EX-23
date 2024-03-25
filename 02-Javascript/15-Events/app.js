// function hello(){
//     console.log('hello world');
// }

//onclick
//onchange
//onmouseover
//onmouseout


// const btn = document.querySelector('#btn');

// btn.addEventListener('click' , hello);
// btn.addEventListener('click' , function (event){
//     console.log('using add event listner');
//     console.log(event);
// } , false);










// const h1 = document.querySelector('h1');

// h1.addEventListener('click' , function (){
//     console.log('heading');
// })













//bubbling == false || image 3 first || then ul func
//capturing == true || opposite

// const ul = document.querySelector('.images');
// const image3 = document.querySelector('#image-3');
// const link = document.querySelector('#link-1');

// ul.addEventListener('click' , function (event){
//     console.log(event.target.parentNode.tagName);
//     if(event.target.parentNode.tagName === 'LI'){
//         let removeItem = event.target.parentNode;
//         removeItem.parentNode.removeChild(removeItem)
//     }

// } , false);

// image3.addEventListener('click' , function (event){
//     // event.stopPropagation()
//     console.log('image 3 clicked')
// } , false)

// link.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log('hello google');
// })











// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const btn = document.querySelector('#form');

// btn.addEventListener('submit' , function (event){
//     event.preventDefault()
//     console.log(email.value);
//     console.log(password.value);
// })












// const head = document.querySelector('#head');

// head.addEventListener('mouseout' , function (){
//     console.log('mouse out')
// })
// head.addEventListener('mouseover' , function (){
//     console.log('mouse over')
//     Image.src = ''
// })




// const select = document.querySelector('#selectBox');

// function showValue() {
//     console.log("Selected fruit: " + select.value);
// }










const img = document.querySelector('#img');

img.addEventListener('mouseover' , function(){
    img.src = 'https://i.pinimg.com/736x/cc/7b/58/cc7b58cbcd341a19a6545d947e48329b.jpg'
})
img.addEventListener('mouseout' , function(){
    img.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'
})
















