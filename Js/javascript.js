// let element = window.document;
// let element = document;
// let element = window.document.head;
// let element = window.document.body;
// let element = window.document.doctype;
// let element = window.document.images;
// let element = window.document.links;
// let element = window.document.URL;
// let element = window.document.baseURI;
// let element = window.document;

// let element = document.getElementsByClassName('container');
// let element = document.getElementsByTagName('div');
// let element = document.getElementsByTagName('a')
// let elements = document.getElementById('card-body');
// let elements = document.querySelector('#card-body');
// let element = document.querySelectorAll('a');
// console.log(elements);
// console.log(element);

// Inner html , Inner Text , Inner content

// let div = document.querySelector('div');
// div.innerText = 'NO Heading And Paragraph';
// div.innerHTML = '<h3>Inner html</h3> \n <p>Inner Html get The Element and its Text</p> \n <h3>Inner Html example</h3>';

// let form = document.querySelector('form');
// console.log(form.textContent);
// console.log(form.innerHTML);

// let h3 = document.querySelector('h3');
// h3.innerText = h3.innerText + ' We Are Learning Javascript';

// let divs = document.querySelectorAll('div');
// // divs[0].innerText = 'Unique value is present in box 1';
// // divs[1].innerText = 'Unique value is present in box 2';
// // divs[2].innerText = 'Unique value is present in box 3';
// console.log(divs[0].getAttribute('class'));
// console.log(divs[2].getAttribute('id'));
// divs[3].setAttribute('id' , 'indice')

// let indice = 1;

// for(content of divs)
// {
// content.style.backgroundColor = 'Chocolate';
// content.style.height = '150px';
// content.style.width = '150px';
// content.style.margin = '5px';
// content.style.textAlign = 'center';
// content.style.display = 'inline-block';
// content.style.fontWeight = 'bold';
// content.style.border = '5px solid black';
// content.innerText = 'Unique value is present in box' + indice;
// indice++;
// }


// let div = document.querySelector('div');
// let h1 = document.createElement('h1');
// h1.innerText = 'Example of create Element';
// h1.setAttribute('class' , 'Heading');

// div.append(h1);
// div.prepend(h1);
// div.before(h1);
// div.after(h1);


// let para = document.querySelectorAll('p');
// console.log(para);
// para[1].remove();

 let btn1 = document.querySelector('#btn1');
 btn1.onclick = (ev)=>
 {
     console.log('button was clicked1' , ev);
 };

 btn1.onclick = (ev)=>
 {
     console.log('button was clicked2' , ev.type);
 };

 btn1.onclick = (ev)=>
 {
     console.log('button was clicked3' , ev.target);
 };


    btn1.onclick = (ev)=>
 {
     console.log('button was clicked4' , ev.cilentx);
 };


let btn2 = document.querySelector('#btn2');
btn2.ondblclick = () =>
{
   let email = prompt('Please enter email')
   console.log(email);
};



let box =document.querySelector('#box1');
box1.onmouseover = ()=>
{
    box.classList.add("mouseenter");
    console.log('enter');
};

box1.onmouseout = ()=>
{
    box.classList.add("mouseout");
    console.log('out');
};

let box_value = 'Enter';
box.onclick = ()=>{
    if(box_value === 'Enter'){
        box_value = 'out'
    }
    else{
        box_value = 'Enter'
    }
}


let btn3 = document.querySelector('#btn3');
btn1.addEventListener('click' , (we)=>
{
        console.log('button was clicked' , we);
});

btn1.addEventListener('click' , (we)=>
{
        console.log('button was clicked 2' , we.cilentx);
});

btn1.addEventListener('click' , (we)=>
{
        console.log('button was clicked 3' , we.cilentY);
});

btn1.addEventListener('click' , (we)=>
{
        console.log('button was clicked 4' , we.target);
});


let btn5 = document.querySelector('#btn3');
let mode = 'light'; // on click value will be change in dark
let body = document.querySelector('body');
btn5.addEventListener('click' , ()=>
{
    if(mode === 'light')
    {
        mode = 'dark';
        body.classList.add('dark_mode');
        body.classList.remove('light_mode');
    }
    else{
        mode = 'light';
        body.classList.add('light_mode');
        body.classList.remove('dark_mode');
    }
    // console.log(mode);
});


