// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, formatPrice } from '../utils.js';
import getElement from '../../getElement.js';



const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');


let productID;

window.addEventListener('DOMContentLoaded',async()=>{

    loading.style.display='none';
    let urlID=window.location.search;
    urlID=new URLSearchParams(urlID);
    urlID=urlID.get('id');

    try {
        const response=await fetch(`${singleProductUrl}${urlID}`);

        if(response.status>=200 && response.status<=299){
            const product=await response.json();
            const{id,fields}=product;
            productID=id;
            const{company,price,name,colors,description}=fields;
            const image=fields.image[0].thumbnails.large.url;

            document.title=`${name.toUpperCase()}`;
            pageTitleDOM.textContent=`Home / ${name}`;
            imgDOM.src=image;
            titleDOM.textContent=name;
            companyDOM.textContent=`by ${company}`;
            priceDOM.textContent=formatPrice(price);
            descDOM.textContent=description;

            colors.forEach((color)=>{

                const span=document.createElement('span');
                span.classList.add('product-color');
                span.style.background=`${color}`;
                colorsDOM.appendChild(span)
            })

        
        }else{
            
            console.log(response.status,response.statusText);
            centerDOM.innerHTML=`<div>

            <h3 class="error">sorry,something went wrong</h3>
            <a href="index.html" class="btn">back home</a>
            
            
            </div>`

        }
       
        
    } catch (error) {
        console.log(error);
    }



})

cartBtn.addEventListener('click',()=>{
    addToCart(productID)
})




