/*const numbers=[1,2,3,4,5];
const even=numbers.filter(num=>num%2===0)
console.log(even)*/

/*const products = [
  { name: "Shirt", price: 500 },
  { name: "Jeans", price: 1200 },
  { name: "T-Shirt", price: 300 }
];
const filtered = products.filter(product => product.price < 1000);
console.log(filtered); */


/*const filteredArray = Array.filter(item=>content)

const users=[
  {name:"Alice",age:25},
  {name:"Bob",age:17},
  {name:"Charlie",age:30}
];
const adults=users.filter(user=>user.age>=18)
console.log(adults)*/

/*const people=[
  {name:"A",gender:"Female",age:25},
  {name:"B",gender:"Male",age:17},
  {name:"C",gender:"Female",age:15}
];
const result=people.filter(p=>p.gender==="Female"&&p.age>18)
console.log(result)*/

const filterOptions = {
  Gender: [
    { name: "Boys", count: 1052 },
    { name: "Girls", count: 64631 },
    { name: "Women", count: 206441 }
  ],
  Categories: [
    { name: "T-Shirts", count: 5000 },
    { name: "Jeans", count: 3000 },
    { name: "Dresses", count: 2000 }
  ]
};
const filteredCategories=filterOptions.Categories.filter(item=>item.count>3000)
console.log(filteredCategories)

const womenOnly=filterOptions.Gender.filter(item=>item.name==="women")


