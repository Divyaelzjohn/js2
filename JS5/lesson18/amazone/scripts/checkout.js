import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts , loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-oop.js';
// import '../data/cart-class.js'
// import '../data/backend-practice.js';


/* async makes a function return a promise 
-await ->lets us wait for a promise to finish, before going to the next line.
-lets us write asynchronus code like normal code*/

async function loadPage(){
  console.log('load page');

  await loadProductsFetch();

  const value= await new Promise((resolve)=>{
    loadCart(()=>{
        resolve('value3')
    })
  })

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage()

/*
Promise.all([
  // new Promise((resolve)=>{
  //   loadProducts(()=>{
  //     resolve('value1')
  //   });
  // }),
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
})
*/


/*new Promise((resolve)=>{
  // console.log('start promise')
  loadProducts(()=>{
    // console.log('finished loading')
    resolve('value1');
  });
}).then((value)=>{

  console.log(value)
  return new Promise((resolve) => {
    loadCart(()=>{
      resolve('');
    });
  })

  // console.log('next step');
}).then(()=>{
  renderOrderSummary()
  renderPaymentSummary()
});*/

/*
loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary()
  })
  // renderOrderSummary();
  // renderPaymentSummary();
});
*/


// Use promises instead of callbacks.
// Promises keep our code more flat
// we can run multiple promises at the same time

// Promise.all()  - lets us run multiple promises at the same time and wait for all of them to finish


// fetch()= better way to make HTTP request