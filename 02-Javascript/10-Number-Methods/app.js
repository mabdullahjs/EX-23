// const fruits = ['apple' , 'banana'];
// fruits.push('watermelon');
// console.log(fruits);


// const num = 9.9;
// console.log('round===>', Math.round(num));
// console.log('ceil ===> ', Math.ceil(num));
// console.log('floor ===> ', Math.floor(num));






//method
//function

// console.log(Math.ceil(Math.random()*10));
// console.log(Math.ceil(Math.random()*5));
// console.log(Math.ceil(Math.random()*100));

// const num = '20dsfsdfds';
// // console.log(Number(num));
// console.log(+num);
// console.log(typeof(+num));






















// const num = 12345
// console.log(num.toString());
// console.log(typeof(num.toString()));



















// parseInt
// parseFloat



// const num = '10.23432';
// const convert = parseInt(num)
// console.log('parseInt===>', convert);
// const num2 = '10.23432';
// const convert2 = parseFloat(num2)
// console.log('parseFloat ===>', convert2);
// console.log(+num2);
// console.log(typeof(convert2));
// console.log(+num + +num2);





// const num = 10.23924324;
// console.log(num.toFixed(4));






//math.random ko use krta hua toss wala game banana haa. toss ka undar yato chand ya masjid

// math.round sa 1 













// function toss(){
//     // console.log('hello world');
//     const randomNumber = Math.floor(Math.random()*2);
//     if(randomNumber === 0){
//         console.log('chand');
//     }else{
//         console.log('masjid');
//     }
// }






















//0 == chand
//1 == masjid
const image = document.querySelector('#coin-image');
const h1 = document.querySelector('h1');
// image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
// console.log(image);

function toss(user) {
    const randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber === 0){
        image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
    }else{
        image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
    }

    if(user === 'chand' && randomNumber === 0 || user === 'masjid' && randomNumber === 1 ){
        h1.innerHTML = 'toss jeet gaye ho';


    }else{
        h1.innerHTML = 'user toss haar gayaa';
    }
}

















