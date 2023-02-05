// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
import getElement from '../../getElement.js';
// set items


const cartItemCountDOM=getElement('.cart-item-count');
const cartItemsDom=getElement('.cart-items');
const cartTotalDOM=getElement('.cart-total');

let cart=getStorageItem('cart');



export const addToCart = (id) => {

  let item=cart.find((cartItem)=>cartItem.id===id);

  if(!item){

    let product=findProduct(id);
    product={...product,amount:1};

    cart=[...cart,product];

    addToCartDOM(product)
   
  }else{
    
    const amount=increaseAmount(id);
    const items=[...cartItemsDom.querySelectorAll('.cart-item-amount')];
    const newAmount=items.find((value)=>value.dataset.id===id);
    newAmount.textContent=amount;
  

    
  }

  displayCartItemCount();
  displayCartTotal();


  setStorageItem('cart',cart)

  openCart();
 
};


const displayCartItemCount=()=>{
  const amount=cart.reduce((total,cartItem)=>{
    return total+=cartItem.amount;
  },0)

  cartItemCountDOM.textContent=amount;


}

const displayCartTotal=()=>{

  let total=cart.reduce((total,cartItem)=>{
    return total+=cartItem.price*cartItem.amount;
  },0)


  cartTotalDOM.textContent=`Total : ${formatPrice(total)}`;

}

function increaseAmount(id){

  let newAmount;
  
  cart=cart.map((cartItem)=>{
    if(cartItem.id===id){
      newAmount=cartItem.amount+1;
      cartItem={...cartItem,amount:newAmount}
    }
    return cartItem;
  });

  return newAmount;


}

function decreaseAmount(id){

  let newAmount;
  
  cart=cart.map((cartItem)=>{
    if(cartItem.id===id){
      newAmount=cartItem.amount-1;
      cartItem={...cartItem,amount:newAmount}
    }
    return cartItem;
  });

  return newAmount;

}

function removeItem(id){
  cart=cart.filter((cartItem)=>cartItem.id!==id);
}


function  setupCartFunctionality(){

  cartItemsDom.addEventListener('click',(e)=>{

    const element=e.target;
    const parent=e.target.parentElement;
    const id=element.dataset.id;
    const parentID=parent.dataset.id;

    if(element.classList.contains('cart-item-remove-btn')){
      removeItem(id);
      parent.parentElement.remove();

    }

    if(parent.classList.contains('cart-item-increase-btn')){
      const newAmount=increaseAmount(parentID);
      parent.nextElementSibling.textContent=newAmount;
      
    }

    if(parent.classList.contains('cart-item-decrease-btn')){

      const newAmount=decreaseAmount(parentID);

      if(newAmount===0){
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      }else{
        parent.previousElementSibling.textContent=newAmount;
      }

      
    }








    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart',cart);

   
    
  })






}

function  displayCartItemDOM(){
  cart.forEach((cartItem)=>{
    addToCartDOM(cartItem)
  })
}


const init=()=>{

  displayCartItemCount();
  displayCartTotal();
  setupCartFunctionality();
  displayCartItemDOM();

 





}

init();