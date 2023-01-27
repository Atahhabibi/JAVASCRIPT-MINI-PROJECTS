const companiesElement=document.querySelector('.companies');
const productsElement=document.querySelector('.products-container');
const SearchInput=document.querySelector('.search-input');
const value=SearchInput.value;
console.log(value);

let companies=products.map((item)=>item.company)
companies=['all',...new Set(companies)];

companies=companies.map((item)=>{
   return  `<button class="company-btn">${item}</button>`
}).join("")

companiesElement.innerHTML=companies;
console.log(products);

let newProducts=products.map((item)=>{

    const {id,title,company,image,price}=item;
    return `<article class="product">

    <img src="${image}" alt="product" class="product-img img"//>

    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
    </footer>
    
  </article>`
}).join("");


window.addEventListener('DOMContentLoaded',()=>{
    productsElement.innerHTML=newProducts;
})


SearchInput.addEventListener('change',()=>{
    // console.log('change');
})


