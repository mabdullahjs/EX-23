// const h1 = document.querySelectorAll('h1');
// const h1 = document.querySelectorAll('.class')[1];
// const h1 = document.getElementById('head1')
// const h1 = document.getElementsByClassName('head2')
// const h1 = document.getElementsByTagName('h1')

// console.log(h1);
























// const p = document.querySelector('p');
// console.log(p.childNodes[0].nodeValue);

// const em = document.querySelector('em');
// console.log(em.childNodes[0].nodeType);
// console.log(document.nodeType);


// console.log(document.childNodes[1].childNodes[2].childNodes[5].childNodes[1].childNodes[0].nodeValue);













// const ul = document.querySelector('ul');
// const li = document.querySelector('li');
// // console.log(ul.lastChild);
// console.log(ul.nodeName);
// console.log(li.nodeName);












// function hello(){
//     console.log('hllo world');
// }

// const div = document.querySelector('div');

// const h1 = document.createElement('H1');
// const h1Text= document.createTextNode('hello world');
// h1.setAttribute('onclick' , 'hello()');
// h1.appendChild(h1Text)
// div.appendChild(h1);

// console.log(h1);



const div = document.querySelector('div');

function render(){
    console.log('hello');
    const h1 = document.createElement('H1');
    const headText = document.createTextNode('hello world');
    h1.appendChild(headText);
    div.appendChild(h1);
    const ul = document.createElement('UL');
    const li1 = document.createElement('LI');
    const li2 = document.createElement('LI');
    const li3 = document.createElement('LI');
    const li1Text = document.createTextNode('home')
    const li2Text = document.createTextNode('about')
    const li3Text = document.createTextNode('contact')
    li1.appendChild(li1Text);
    li2.appendChild(li2Text);
    li3.appendChild(li3Text);
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div.appendChild(ul);


}


























