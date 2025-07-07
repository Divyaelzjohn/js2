console.log('hello'.length);
console.log('hello'.toUpperCase())

const object1={
  message:'hello'
}

const object2=object1

object1.message='Good Job';
console.log(object1)
console.log(object2)

const object3={
  message:'Good job'
}
console.log(object3===object1)    //false because diffrent references
console.log(object2===object1)

const object4={
  message:'Good Job',
  price:799
};
// const message=object4.message;
const{message,price}=object4
console.log(message)
console.log(price)

const object5= {
  // message:message
  message,
  // method:function function1(){
  //   console.log('method')
  // }
  method(){
    console.log('method')
  }
};
console.log(object5)
object5.method()

