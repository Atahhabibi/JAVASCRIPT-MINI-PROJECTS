
import getElement from '../../getElement.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput=getElement('.price-filter');
    const priceValue=getElement('.price-value');
    let maxPrice=store.map((proudct)=>proudct.price);
    maxPrice=Math.max(...maxPrice);
    maxPrice=Math.ceil(maxPrice/100);
    priceInput.value=maxPrice;
    priceInput.max=maxPrice;
    priceInput.min=0;

    priceValue.textContent=`Value :$${maxPrice}`

    priceInput.addEventListener('input',()=>{
     
        const value=parseInt(priceInput.value);
        priceValue.textContent=`Value : ${value}`

        let newStore=store.filter((proudct)=>proudct.price/100<=value);
        display(newStore,getElement('.products-container'),true);

        if(newStore.length<1){
            const products=getElement('.products-container');
            products.innerHTML=`<h3 class="filter-error">sorry, no product matched your search</h3>`
        }

      
    })

    

    



};

export default setupPrice;
