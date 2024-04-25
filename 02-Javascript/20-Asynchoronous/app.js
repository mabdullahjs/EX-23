// console.log('hey 1') // main stack
// console.log('hey 2') // main stack
// setTimeout(()=>{
//     console.log('hey 3') //side stack
// } , 0)
// console.log('hey 4') // main stack









// asynchronous
// synchronous

// console.log('hello world 1');
// console.log('hello world 2');
// console.log('hello world 3');
// console.log('hello world 4');


//synchronous programming ka matlb line by line code chalaiga iska matlb jab request facebook ka server pa kronga to wo wait nahi kraiga or next line chaladega

//main stack or side stack ka darmiyaan jo communication hoti ha usa kiya kehta hain event Looop


//asynchronous matlb jab tk data nahi ajata mera pass console nahi chalaiga.

// console.log('hello world');

//settimeout
//setinterval
//promises
//async await
//fetch
//axios






// scaleable web applications






// console.log('hello world');
// setTimeout(()=>{
//  console.log('fb wali image');
// } , 1000);






















//promises

//pending
//fullfill
//rejected


//.then // .catch




// const promiseOne = new Promise((resolve, reject) => {
//     const bankBalance = 200000;
//     if (bankBalance > 100000) {
//         console.log('shaadi Mubarak');
//         resolve()
//     } else {
//         console.log('topi ha maalik.');
//         reject()    }
// })

// promiseOne
// .then(function () {
//     console.log('then chal rha haa')
// })
// .catch(() => {
//     console.log('catch chal rha ha')
// })








// function getData (bankBalance){
//     return new Promise((resolve , reject)=>{
//         if(bankBalance > 100000){
//             resolve('hello world')
//         }else{
//             reject('bye world')
//         }
//     })
// }

// getData(10).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })























//API
//Application Programming Interface

// XMLHttpRequest
// Fetch // js ma default miljata haa.
// axios

// fetch() return krta hain promise
// axios() //

// fetch().then(()=>{}).catch(()=>{})
// axios().then(()=>{}).catch(()=>{})



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//         return res.json()
//     })
//     .then((json) => {
//         console.log(json)
//     })


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))




// function axios(url){
//     return new Promise((resolve , reject)=>{
//         //     // const data = data mangwalia
//         // if(data agar sahi sa phoch jaye){
//         //     // resolve(data)        
//         // }else{
//             reject('error araha ha')
//         }//
//     })
// }

// const div = document.querySelector('div');
// axios('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     console.log(res.data)
//     res.data.map((item)=>{
//         div.innerHTML += `
//         <h1>Name: ${item.username}</h1>
//         <h1>Email: ${item.email}</h1>
//         <h1>Website: ${item.website}</h1>
//         <hr/>
        
//         `
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })


// {
//     data: [{}]
// }



//http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city}
























const form = document.querySelector('#form');
const city = document.querySelector('#city');
const div = document.querySelector('div');

form.addEventListener('submit' , (event)=>{
    event.preventDefault();

    //get weather
    axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}`)
    .then((res)=>{
        console.log(res.data);
        div.innerHTML = `
        <h1>City: ${res.data.location.name}</h1>
        <h1>Country: ${res.data.location.country}</h1>
        <h1>State: ${res.data.location.region}</h1>
        <h1>Temperature: ${res.data.current.temp_c}°</h1>
        <h1>Temperature: ${res.data.current.temp_c}°</h1>
        <img src="${res.data.current.condition.icon}" alt="icon">
        
        `
    }).catch((err)=>{
        console.log(err)
    })

    //empty form
    city.value = '';
})









