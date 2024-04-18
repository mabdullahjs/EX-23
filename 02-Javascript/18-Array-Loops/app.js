// console.log('hello world');

// forin
// for of
// for each
// map
// filter
// reduce

const fruits = ['apple', 'banana', 'watermelon', 'guava', 'melon', 'papaya']

const user = {
    username: 'abdullah',
    email: 'mabdullah2037@gmail.com',
    age: 20,
    city: 'karachi'
}

//array ma iterate krwana ka liya use hota ha.

// for (const iterator of fruits) {
//     console.log(iterator);
// }


//object ma iterate krwana ka liya use hota ha.
// for (const key in user) {
//    console.log(`${key} : ${user[key]}`)
// }







// kisi bhi function ka undar as an argument jo function deta hain wo callback hota ha.

// wo function jo apna undar as an argument function leta ha wo higher order function ha.



// const singleFruits = fruits.forEach((item , index)=>{
//     console.log(item , index)
//     return index
// })

// console.log(singleFruits);




// const div = document.querySelector('div');
// const singleFruits = fruits.map((item, index) => {
//     console.log(item, index);
//     div.innerHTML += `<h1>${item}</h1>`
//     return index;
// })

// console.log(singleFruits);
























const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const arr = []
// const filterNum = nums.map((item)=>{
//     if(item > 5){
//         arr.push(item)
//     }
// }) 
// console.log(arr);


// const filteredNum = nums.filter((item)=>{
//     return item > 5 
// })

// console.log(filteredNum)














const products = [
    { title: "Laptop", category: "Electronics", price: 999.99 },
    { title: "Smartphone", category: "Electronics", price: 699.99 },
    { title: "Headphones", category: "Electronics", price: 99.99 },
    { title: "Backpack", category: "Fashion", price: 49.99 },
    { title: "T-Shirt", category: "Fashion", price: 19.99 },
    { title: "Jeans", category: "Fashion", price: 39.99 },
    { title: "Desk Lamp", category: "Home", price: 29.99 },
    { title: "Throw Pillow", category: "Home", price: 14.99 },
    { title: "Coffee Maker", category: "Home", price: 79.99 },
    { title: "Running Shoes", category: "Sports", price: 89.99 },
    { title: "Yoga Mat", category: "Sports", price: 24.99 },
    { title: "Dumbbells", category: "Sports", price: 49.99 },
    { title: "Hard Drive", category: "Electronics", price: 79.99 },
    { title: "Watch", category: "Fashion", price: 199.99 },
    { title: "Sunglasses", category: "Fashion", price: 129.99 },
    { title: "Plant Pot", category: "Home", price: 9.99 },
    { title: "Curtains", category: "Home", price: 34.99 },
    { title: "Soccer Ball", category: "Sports", price: 19.99 },
    { title: "Basketball", category: "Sports", price: 29.99 },
    { title: "Gaming Console", category: "Electronics", price: 399.99 }
];

// map, filter,reduce ka saath aik or baar lagana ko chaining kehta hain.

// console.log(products);

// const electronicsItems = products.filter(function (item){
//     return item.category === 'Electronics'
// }).filter((item)=>{
//     return item.price < 90
// })

// console.log(electronicsItems);
















