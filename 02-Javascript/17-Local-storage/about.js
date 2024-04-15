const data = JSON.parse(localStorage.getItem('fruits'));
console.log(data);


function removeItem(){
    localStorage.removeItem('fruits');
}