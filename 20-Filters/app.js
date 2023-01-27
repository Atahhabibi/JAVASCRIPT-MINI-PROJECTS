const companiesElement=document.querySelector('.companies');
const productsElement=document.querySelector('.products-container');
const SearchInput=document.querySelector('.search-input');
const form=document.querySelector('.input-form');
let filterdProducts=[...products];


const displayProducts=(item=products)=>{

  let newProducts=item.map((item)=>{

    const {id,title,company,image,price}=item;
    return `<article class="product">

    <img src="${image}" alt="product" class="product-img img"//>

    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
    </footer>
    
  </article>`
}).join("");

  productsElement.innerHTML=newProducts;

}

let companies=products.map((item)=>item.company)
companies=['all',...new Set(companies)];

companies=companies.map((item)=>{
    return `<button class="company-btn">${item}</button>`
 
}).join("");


companiesElement.innerHTML=companies;

const btns=document.querySelectorAll('.company-btn');

btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    const company=btn.textContent;

    if(company==='all'){
      displayProducts(products);
    }else{
      filterdProducts=products.filter((product)=>product.company===company);
      displayProducts(filterdProducts);

    }

  })
})




window.addEventListener('DOMContentLoaded',()=>{
   displayProducts();
})


form.addEventListener('keyup',()=>{

    const inputValue=SearchInput.value;
    filterdProducts=products.filter((product)=>product.title.toLowerCase().includes(inputValue.toLowerCase()));

    if(filterdProducts.length<1){
         productsElement.innerHTML=`<strong>sorry, no product match your search</strong> `;
    }else{
      displayProducts(filterdProducts)
    }

    
})


