// Backend, callbacks, Promises and Async Await

// Backend is another computer that manages the data of a website

// HypertText Transfer Protocol

// GET  -> get some information from the backend
/* Type of requests
GET
POST
PUT
DELETE
*/

/* The backend can respod with diffrent types of data */

// URL - uniform resouce locator
// URL Paths-> Each URL paths wil  give us a diffrent response

// Status code - starts with 4 or 5 (400,404,500)=failed
// 4- our problem     5-backend's problem
// starts with 2(200,201,204)=succeeded

// function without a name is anonymous function

// Promises - better way to handle asynchronus code
// similar to done() function
// let us wait for some code to finish , before going to the next step

/* resolve is a function 
-similar to done() function
-lets us control when to go to the next step
-allows javascript to do multiple things at the same time*/

/* To send data in a request, we need to use a diffrent type of request
4 TYpes of rwquests
-GET = get something from the backend
        GET request don't really let us send data to the backend
POST=create something
      POST lets us send data to the backend.
PUT=update something
DELETE=delete something */

/* header gives the backend more information about our request */

/* URL parameter = let us save data directly in the URL */




// Lesson 18 Exercise - Backend, Promises , Async Await
// For the first few exercise , put your code in a file called "lesson18.html". Use the backend URL:https://supersimlebackend.dev

/* 18a.Using XMLHttpRequest , make a GET rwquest to /greeting and display the response in the console */
/* 18b.Using fetch() , make the same request GET /greeting and display the response in the console . Note:this URL path responds with some text, so instead of using response.json() , use response.text() */
/* 18c. Make the same request GET /greeting as 18b, but using fetch() and async await. Note: in order to use await , put your code inside an async function first, and run the function. */
/* 18d.Using fetch() and async await , create a POST request to /greeting. In your request, send the JSON {name:"your_name"} (send your own name instead of your_name). Display the response in the console. */
// Notice that even though GET/greeting and POST /greeting use the same URL path/greeting , they do doffrent things.

/* 18e. Try making a GET request to https://amazone.com . You'll get an error known as a CORS(Cross-Origin Resource Sharing) error. This means the URL your code is running on propbably http://127.0.0.1:5500) is diffrent than https://amazone.com, so Amazone's backend blocked your request for security reasons. Your code is correct, Amazone needs to change some settings in their backend to allow your requests. */
/* 18f. Add error handling to 18e.When there's an error, display 'CORS error. You request was blocked by the backend. ; in the console */
/* 18g.Make a request POST /greeting to https://supersimplebackend.dev, but don't send any data (don't send a body).My backend will give back a 400 error (invalid request). fetch() does not throw an error for 400 errors(only network errors) so we'll manually create an error :
-Check if (response.status>=400) and manually create an error using throw response; 
-Add error handling to catch this manual error. When the error is caught, check if (error.status===400) and display the JSON attached to the response in the console:await error.json()
-Otherwise, display 'Network errror. Please try again later.'*/
// The rest of these exercise will be done in the project code.
/* 18h. In data/cart.js, create an async function loadCartFetch() and create an async await version of loadCart().console.log() the text attached to the response. In scripts/checkout.js, inside loadPage(), replace loadCart() with loadCartFetch(). */
/* 18 i.In checkout.js, use Promise.all to run loadProductsFetch() and loadCartFetch() at the same time. Note: give the promises directly to Promise.all(don't await them, otherwise they will run one at a time).Then , use await Promise.all(...) to wait for Promise.all to finish. */
/* 18j.In orderSummaryTest.js, in the beforeAll hook, instead of using a done function , make the inner function async and use await to wait for loadProductsFetch() to finish. */
/* 18k.(OPtional) if you did the exercise from the previous lessons , you may have some failing tests. Fix those failiing tests(if there are any) */

// Challenge Exercises
// Note:in these next exercise , you will independently create entire pages and features , so you can practice figuring things out yourself. 
/* 18l. We'll finish the order page. Create a new file scripts/orders.js for creating the order page, and load it in orders.html . Using the array of orders in data/orders.js , generate the HTML for this page. */
/* 18m.Make the orders page interactive:
-"Buy it again" button should add the product to the cart
-"Track package" button should open the tracking page(remember to insert the orderId and productId into the URL parameters) */
/* 18n.We'll finish the tracking page. Create a new file scripts/tracking.js and load it in tracking.html. Then , go to the orders page, and click ""Track package" to go the tracking page. This will save the orderId and productId in the URL parameters(make the URL always has these 2 parameters, otherwise the tracking page won't work).
-Use orderId and productId from the URL parameters to get the order and product to track . Use this data to generate the HTML for this page. */
/* 18o.Make the tracking page interactive:
-Calculate the percent progress of the delivery:
((currentTime-orderTime)/(deliveryTime-orderTime))*100
-Set the width of the green progress bar to this percent.Hint:add the style attribute:style="width:_%" 
-Set the correct status above the progress bar to green (0%-49%=Preparing, 50%-99%=SHipped.100%+%=Delivered*/
/*18p.At the top of the home page(amazone.html) there's a search bar:
-When you type in the search bar and press the search button ,it should go to the home page(amazone.html) and also save your search in a URL parameter:amazone.html?search=your_search
-On the home page , check if there's a URL parameter called search. If it exists, filter the products on the home page and show products whose name contains what you searched (hint: use .includes()) */
/*18q.We'll improve the search feature from18p
-make the search case-insensitive (capitals don't matter)
-Each product has a property called "keywords". Add this property to the Product class.When filtering the products, also check if one of the keywords contains what you searched (cae-sensitive) */
/* 18r. Add some more features to this project that you think makes sense. */

