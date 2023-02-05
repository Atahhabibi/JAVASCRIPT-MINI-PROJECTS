import getElement from '../../getElement.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {

    let companies=store.map((product)=>product.company)
    companies=["all",...new Set(companies)];
    const companiesDOM=getElement('.companies');

    companiesDOM.innerHTML=companies.map((company)=>{
     return `<button class="company-btn">${company}</button>`
    }).join("");

    companiesDOM.addEventListener('click',(e)=>{
        e.preventDefault();
      const element=e.target;
      if(element.classList.contains('company-btn')){
          const value=element.textContent;

          if(value==="all"){
              display(store,getElement('.products-container'),true) 
              return; 
          }

          let newStore=store.filter((product)=>product.company===value)
          display(newStore,getElement('.products-container'),true);
          
      }
    })

};

export default setupCompanies;
