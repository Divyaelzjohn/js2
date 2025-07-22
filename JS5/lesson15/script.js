/* 15a.Using DayJS, get the date 5 days after today and display it the format:'<Month><Day of Month>' */
/* 15b.Calculate 1 month after today and display in the same format as 15a.*/
/*15c.DayJS has a.subtract(...) method which substracts time from a date. Calculate 1 month before today and display in same format as 15a.*/
/* 15d.Get a date from DayJS and display it in this format:'<Day of week>' (The format should be 'Monday','Tuesday', etc.) */
/* 15e.Create a function isWeekend(date) that takes a DayJS object , and returns whether the date is 'Sunday' or 'Saturday' (hint : use solution from 15d).Test this function with a few diffrent dates. */
/* 15f.Movie isWeekend() into a separate file and use export default. Import this function in another  file and run it. */
/* 15g.We can also  rename a default export when we import . In 15f , when we "import isWeekend", change the name to something else like "import isSatSun "  and use this new name to run the function.*/

// We'll improve the code in the final amazone project.
/* 15h.When deleting a product from the cart , instead of using the DOM and updateing the page directly with . delete(), regenerate the HTML for the order summary */
/* 
15i. In the payment summary on the right, the number in the first line “Items (3):” is supposed to show the cart quantity. However, this number is always 3. Replace this number with the actual cart quantity and make sure it updates
whenever we change the cart.

Items (3):$42.75
Shipping & handling:$0.00
Total befor tax:$42.75
Estimated tax (10%):$4.28
Order total:$47.03
*/


// Challenge Exercises
// We'll create the Checkout Header (at the top) using MVC. Checkout (3 items) 
/*15j. Create a new file "checkoutHeader.js" in the "checkout" folder, create a function renderCheckoutHeader, generate the HTML, and display it on the page. Note: insert the correct cart quantity into the HTML.*/

/*
15k. After deleting a product from the cart, re-render the Checkout Header so the cart quantity is up-to-date. Note: use MVC instead of updating the page directly with the DOM.*/
// Many online stores don't deliver on the weekend (Saturday/Sunday). We'll update our code so that delivery dates are not on a weekend. 
/*151. In orderSummary.js, we have some code at the top that takes a deliveryOption, calculates the delivery date, and formats it. This code is repeated in deliveryOptionsHTML(). Create a function to reuse this code. (Create function calculate DeliveryDate(deliveryOption) in deliveryOptions.js, import and run this function in orderSummary.js).*/

/* 
15m. When calculating the delivery date, skip all Saturdays and Sundays.
•Examples: if today is Friday, Oct 5, and we choose 1-day delivery,
the delivery date should be Monday, Oct 8 (skip the weekend).

•Friday, Oct 5 + 3 days = Wednesday, Oct 10 (skip the weekend).
•Monday, Oct 1 + 3 days = Thursday, Oct 4 (no weekend in between). 
-Friday, Oct 5 + 7 days = Tuesday, Oct 16 (skip 2 weekends in between).


Hints: Get the number of days you need to add. Use a while loop, and each time, add 1 day and decrease the remaining days to add.
If the date is a weekend, skip decreasing the remaining days. (You can use isWeekend() from exercise 15e to help you).
*/
/*
15n. Optional: in exercise 14f - 14n, we made the "Update" link interactive.
•
•
Delivery date: Tuesday, October 31
Black and Gray Athletic Cotton Socks - 6 Pairs
$10.90
Quantity: 2 Update Delete

If you didn't do this, feel free to copy the solution or skip this exercise.
Copy over the code for the "Update" link into the current code.
After updating the quantity in the cart, instead of using the DOM to update the page directly, use MVC and re-render all parts of the page that need to be updated.
*/