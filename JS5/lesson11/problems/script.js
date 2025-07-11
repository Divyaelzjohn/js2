/* 11a.Create an array of numbers:const nums=[10,20,30];Modify the last value in this array and change it to 99 */
/* 11b.Create a function getLastValue(array) that takes an array  and returns the last value in the array.Hint:array indexes start at 0 so the last index is the number of values in the array minus 1(lastIndex = array.length-1)
-getLastVlaue([1,20,22,24.5])=>'good'
-getLastValue(['hi','hello','good']) =>'good'*/
/* 11c.Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched).
-arraySwap([1,20,22,24,5])=>[5,20,22,24,1] 
-arraySwap(['hi','hello','good'])=>['good','hello','hi']*/
/* 11d.Create a for loop that counts up from 0 to 10 , but counts up by 2 (0,2,3,...,8,10) */
/*11e.Create a for loop that counts down from 5 to 0 */
/* 11f.Do exercise 11d and 11e , but using while loops. */
/* 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1 
-[1,2,3]=>[2,3,4]*/

/* 11h.Create a function addOne(arrray) that takes an array of numbers and returns an array where each number is increased by 1.
-addOne([1,2,3])=>[2,3,4]
-addOne([-2,-1,0,99])=>[-1,0,1,100] */

/*11i.Create a function addNum(array,num) that takes an array of numbers and returns an array where each number is increased by 'num'.
-addNum([1,2,3],2)=>[3,4,5]
-addNum([1,2,3],3)=>[4,5,6]
-addNum([-2,-1,0,99],2)=>[0,1,2,101] */
/* 11j.Create a function addArrays(array1,array2) that takes 2 arrays of numbers and adds each number in the arrays together.
-addArrays([1,1,2],[1,1,3])=>[2,2,5]
-addArrays([1,2,3],[4,5,6])=>[5,7,9] */

/* 11k. Create a function countPositive(nums) that takes an array of numbers and return how many numbers in the array are greater than 0.
-countPositive([1,-3,5])=>2
-countPositive([-2,3,-5,7,10])=>3 */

/* 11l.Create a functiopn minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array(do this using a loop instead of using something like Math.min).
-minMax([1,-3,5])=>{min:null,max:null}
-minMax([3])=>{min:3,max:3}  */
/* 11n.Create a function countWords(words) that takes an array of strings and returns an object with how many times  each string appeared.
-countWords(['apple','grape','apple','grape'])=>{apple:3,grape:1}(HInt:you can access a property using a variable :object[variable];
This uses the value inside the variable as the property name). */

/* 11o. Create an array of strings, loop over the array, and check if the string 'search' is inside the array. If it is , console.log() the index of 'search' in the array . if Notification, console.log'-1' 
-['hello','world','search','good']=>console.log(2
-['not','found']=>console.log(-1*/

/* 11p.Modify 11o so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. Use break;
-['hello','worls','search','good','search']=>console.log(2) */

/* 11q.Create a function findIndex(array,word) that searches an array for a string (in the 'word' parameter) and returns the index of the first appearence of the string. If it doesn't exist in the array, retuen -1.
-findIndex([green','red','blue','red'])=>1
-findIndex(['green','red','blue','red'],'yellow')=>-1 */

/* 11r.Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed.(Hint:loop through the array and check if each strinjg is 'egg'.If it is 'egg', use 'continue;' to skip it. If it's not 'egg',add it to the result).
-removeEgg(['egg','apple','egg','egg','ham'])=>['apple','ham'] */

/* 11s. Update exercise 11r to only remove the first 2 eggs from the array.
-removeEgg(['egg','apple','egg','egg','egg','ham'])=>['apple','egg','ham'] */

/* 11t.Arrays have a method alled.reverse(),which reverse the order of the values in the array. Uisng.reverse(),update ecrecise 11s to only remove the last 2 eggs from the array.
-removeEgg(['egg','apple','egg','egg','ham'])=>['egg','apple','hamm'] */

/* 11u.In exercise 11t, one problem with.reversed() is that it doesn't create a copy of the array it is reversing.It modifies the original array. Update the code so the function does not modify the original array.(Hint: use the .slice() method to create a copy of an array's values).
-const foods=['egg','apple','egg','egg','ham']
-console.log(removeEgg(foods))=>["'egg','apple','ham']
-console.log(foods)=>['egg','apple','egg','egg','ham']*/

/* 11v.We'll do the famouse FizzBuzz problem. Create a loop that displays 1 to 20 in the console. If the number is divisible by 3, display 'Fizz' instead of the number. If it's divisible by 5, display 'Buzz' instead. If it's divisible by 3 and 5, display 'FizzBuzz' instead.(Reminder:divisible by 3 means num%3===0)
-1,2,Fizz.4.Buzz,Fizz,7,8,...13,14,FizzBuzz,16,17,... */

/* 11w.Create a copy of exrecise 11q, where  we created findIndex().Below it, create a function unique(array) that takes an array of strings and returns an array where each string only appears once(there are no duplictes).Try to use the findIndex() function in your solution.
-unique(['green','red','blue','red'])=>['green','red','blue']
-unique(['red','green
,'green','red'])=>['red','green'] */

/* 11x.Create 3 files 11x.html,11x.css,and copy the code for the Todo List projects into  these files.
-Update the <link> and <script> elemnts to load 11x.css and 11x.js 
-Update the todo list to use localstorage(if we modify the todo list and refresh the page, the todo list shold stay the same).
-Hint:remember that localstorage only supporys strings. You can use JSON.stringyfy() to convert an array to a string */