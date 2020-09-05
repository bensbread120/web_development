const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//creat a <p> element with red text saying "Hey I'm red!"
const redPara = document.createElement('p');
redPara.style.color = "red";
redPara.textContent = "Hey I'm red!";
container.appendChild(redPara);

// <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('h3');
blueH3.style.color = "blue";
blueH3.textContent = "I’m a blue h3!"
container.appendChild(blueH3);

//<div> with a black border and pink background color
const div = document.createElement('div');
div.classList.add('myDiv');
div.style.cssText = "background: pink; border: 1px solid black"
//another <h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";
div.appendChild(h1);
//a <p> that says “ME TOO!”
const p = document.createElement('p');
p.textContent = "ME TOO!";
div.appendChild(p);

container.appendChild(div);

//button js
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});