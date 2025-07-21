import {cart} from '../../data/cart.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { getProduct } from '../../data/products.js';

export function renderPaymentSummary(){
  // console.log('payment summary');
  let productPriceCents=0;
  let shippingPriceCents=0

  cart.forEach((cartItem) => {
    const product=getProduct(cartItem.productId);
    productPriceCents+= product.priceCents*cartItem.quantity;

    const deliveryOption= getDeliveryOption(cart.getDeliveryOptionId);
    shippingPriceCents+=deliveryOption.priceCents

  });

  // console.log(productPriceCents)
  // console.log(shippingPriceCents)

  const totalBeforeTaxCents=productPriceCents+shippingPriceCents;
  const taxCents=totalBeforeTaxCents*0.1;
  const totalCents=totalBeforeTaxCents+taxCents

  const patmentSummaryHTML=`
  
  `
}

