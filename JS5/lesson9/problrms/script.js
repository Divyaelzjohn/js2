/* 9a.create a button 9a , Use document.querySelector('button) to get the button from the page , and then display it in the console */

console.log(document.querySelector('button'))

/* 9b.Continueing from 9a, create another button 9b below.Using javascript, change the text in the second button to '9b one! (hint : add a class and use.querySelector) */

document.querySelector('.js-button').innerHTML='9b done!'


/* 9c.Create 2 buttons 'heads' and 'tails' , and a paragraph (<p></p>) underneath. When clicking the 'heads' button , display 'You chose:'heads' in the paragraph . When thae 'tails' button , display 'You chose:tails*/

/* 9d.Create a text box(<input>) and a submit button. When clicking 'Submit , display 'Your name is:${text}' on  the page (${text}=the text inside the text box)(hint:Use.value to get the text inside an <input>)*/

/* 9e.Modify exercise 9d so that when you press 'Enter ' in the <input>, it will also display the same message on the page  (hint:use onkeydown and the event object*/



/* 9f.Conatinuing from 9e, create a function to reuse the code(if you already did this, skip this exercise) */
function displayMessage(){
  const inputElement=document.querySelector('.js-name-input');
  document.querySelector('.js-message').innerHTML=`Your name is: ${inputElement.value}`
}

/* 9g.Create a file 9g.html and copy the code from 09-dom-projects.html into this file. In the am,amazon shipping calculator, enter a cost of 7.99 and click 'Calculator, enter a cost of 7.99 and click 'Calculate'. What issue do you see? Find a fix for this issue*/

/* 9h.Let's create the projects on the right:
-Whenever we type in the text box, update the text on the page.
-To do this, we'll learn another evet called <input onkeyup="...">.
-This runs code after we press a key and release it (key comes up) */

/* 9j.We'll improve the calculator project.
-make a copy of exercise 8h.
-Whenever we update the calculation, display it on the page instead of in the console 
-When the page first loads , if a calculation exists in localStorage, display it on the page*/