/* Lesson-14 
In the check out page , the header at the top always says "3 items" */
/* 14a.In checkout.html , find the element that displays "3 items" and delete the text inside . It should display "Checkout()" when the page loads. */
/* 14b.In checkout.js, When the page loads, calculate the actual quantity of products in the cart , and display it in the header:`${quantity} items` 
Hints
-in amazone.js, inside  the function update CartQuantity() , we wrote some code to calculate  the cart quantity . Reuse this code.
-In checkout.html, You'll need to add a class to the element so you can select it with the DOM and change the innerHTML*/
/* 14c.continueing from 14b , also calculate and display the quantity in the hader when clicking "delete".
-First , create a function updateCartQuantity() and put the code from 14b inside
-Run this function when loading the page and when clicking delete (notice that this function doesn't conflict with updateCartQuantity in amazone.js because we're using modules) */
/* 14d. If we open the home page(amazone.html) notice the cart quantity in the top-right always starts at 0 
-Remove the text "0" (so the cart quantity starts as blank
-Whwn thw page loads , calculate the cart quantity and display it in the top right (reuse the updateCartQuantity function) */
/* 14e.Inside the function updateCartQuantity , we have some code that calculates the cart quantity(creates a variable , loop through the cart, and adds up all the quantities). Notice this code is repeated in checkout.js and amazoen.js 
-create a function calculateCartQuantity() and move this code into the function so we can reuse it.
-Put calculateCartQuantity() inside cart.js(because this code relates to the cart ) and use export/import to share it between the 2 files*/

// challenge exercise
/* 14f.In checkout.js , getall the "Update" links from the page and add a "click" event listener to each link . Also, attach the productId to each link. When clicking the link , get the productId to each link.When clicking the link , get the productId and console.log() it */

/* 14g.Add 2 HTML: elements after the 'Update  link:
-An <input class="quantity-input">(for entering a new quantity)
-A <span class="save-quantity-link"> Save</span>(to save the quantity)
-Style the <input> and set its width to 30px (put the style in the file:styles/pages/checkout/checkout.css)
-Add the class "link-primary" to the <span>*/

/* 14h.Make "Save" appear when clicking "Update" 
-When clicking "Update",get the cart-item-container for the product, and add the class "is-editing-quantity" to the container (use. classList)
-In checkout.css , style the <input> & "Save" link and add display : none;(they will be invisible at the start)
-The CSS ".is-editing-quantity .quantity-input{...}" styles elements with class "quantity-input" inside an element with class "is-editing-quantity"
-Use this, and "display:initial;"(resets the display property) to make the <input> appear when editing the quantity . Same for the "Save" link */

/* using similar CSS selectors as14h, make the quantity and "Update" link disappear when editing the quantity. */
/* 14j.Now we'll impliment switching between "Update" and "Save"
Add "click" event listeners to all "Save" links. When clicking "Save", do teh opoosite of "Update":get the cart-item-container for the product, and remove the class "is-editing-quantity". This should reverse all the styling that's applied when editing the quantity. */

/* 14k.When clicking "Save", use the DOM to grt the quantity <input> for the product, and get the value inside (remember to convert this value to a number). This will be the new quantity of the product in the cart. */
/* 14l.In cart.js, create a function updateQuantity(productId, newQuantity) which will find a matching productId in the cart, and and update it's quantity to the new quantity (remember to save to storage after).
-Then, improve and use this function when clicking a "Save" link */

/* 14m. Now that we've updated the quantity in the cart , the last step is to update the quantity in the HTML.Update these 2 places:
-inside the product
-in the header at the top */
/* 14n.Try to come up with more features to add to the "Update" link like:
-Add validation (check the new quantity is >=0 and <1000) 
-Add keyboard support(allow updating by pressing 'Enter'*/

/*  */