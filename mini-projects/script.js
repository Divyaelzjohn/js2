/*function showAlert(){
  alert("Hello");
}*/

/*function addNumbers(){
  let n1=parseFloat(document.getElementById("num1").value)
  let n2=parseFloat(document.getElementById("num2").value)
  let sum=n1+n2;
  document.getElementById("result").textContent=sum;
}*/

/*function changeColor(){
  const colors=["lightblue","lightgreen","lavender","yellow","pink"]
  let randomColor=colors[Math.floor(Math.random()*colors.length)];
  document.body.style.backgroundColor=randomColor;
}*/

/*let count=0;
function increase(){
  count++;
  document.getElementById("count").textContent=count;
}
function decrease(){
  count--;
  document.getElementId("count").yexyContent=count
}*/

const products=[
  {id:1,name:"T-shirt",price:500},
  {id:2,name:"Jeans",price:1200},
  {id:3,name:"shoes", price:2000}
]
let cart=[];

function showProducts(){
  const productList=document.getElementById("product-list")
  productList.innerHTML=" ";
  products.forEach(product=>{
    const div=document.createElement("div")
    div.className="product";
    div.innerHTML=`
      ${product.name}-{product.price}
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div)
  });
}

function addToCart(productId){
  const product=products.find(p=>p.id===productId)
  const itemInCart=cart.find(item=>item.id===productId)

  if(itemInCart){
    itemInCart.qty+=1;
  }else{
    cart.push({...product,qty:1})
  }
  showCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  showCart();
}
function showCart(){
const cartList= document.getElementById("cart-list");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      ${item.name} - ₹${item.price} x ${item.qty} = ₹${item.price * item.qty}
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartList.appendChild(div);

    total += item.price * item.qty;
  });

  document.getElementById("total").innerHTML = total;
}
