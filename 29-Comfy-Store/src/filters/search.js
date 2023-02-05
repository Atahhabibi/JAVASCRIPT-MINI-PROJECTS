import getElement from '../../getElement.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
const form=getElement('.input-form');
const nameInput=getElement('.search-input');

form.addEventListener("keyup",()=>{
    const value=nameInput.value;

    if(value){

        const newStore=store.filter((product)=>{
            let {name}=product;
            name=name.toLowerCase();
            if(product.name.startsWith(value)){
               return  product;
            }
        });
        
        display(newStore,getElement('.products-container'),true);

        if(newStore.length < 1){
            
            const productDOM=getElement('.products-container');
            productDOM.innerHTML=`<h3 class="filter-error">sorry no product matched your search</h3>`
        }

    }else{
        display(store,getElement('.products-container'),true)
    }
    
})

};

export default setupSearch;
