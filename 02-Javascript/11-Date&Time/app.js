// console.log('hello world');

// const num = '10.6565';
// const conversion = parseInt(num);
// const conversion2 = parseFloat(num);
// console.log(conversion);
// console.log(conversion2);


















const rightNow = new Date();
// const rightNow = new Date('November 23, 2003');
// console.log(rightNow);
// console.log(typeof(rightNow));
// console.log(rightNow.getDay());
// console.log(rightNow.getMonth());
// console.log(rightNow.getFullYear());
// console.log(rightNow.getHours());
// console.log(rightNow.getMinutes());
// console.log(rightNow.getSeconds());
// console.log(rightNow.getMilliseconds());
// console.log(rightNow.getTime());



















// const today = new Date().getTime();
// const birthDate = new Date('November 27, 2003').getTime();
// const remainingMilliSeconds = today - birthDate;
// console.log(remainingMilliSeconds / 1000 / 60 / 60 / 24 / 7 / 4.5 / 12);

















// const days = ['sun' , 'mon' , 'tues' , 'wed' , 'thur' , 'fri' , 'sat'];
// const currentDate = new Date("July 21, 1983 13:25:23").getDay();
// console.log(days[currentDate]);



















const date = document.querySelector('#date');

function getUserBirthDate(){
    console.log(date.value);
    const userBirthDate = new Date(date.value);
    userBirthDate.setFullYear(2006);
    console.log(userBirthDate);
}










