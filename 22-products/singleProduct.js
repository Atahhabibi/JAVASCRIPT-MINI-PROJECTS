
const productDOM=document.querySelector('.product');
const End_Point=`https://course-api.com/javascript-store-single-product?id=`;

const fetchProduct=async()=>{

    try {
        productDOM.innerHTML=`<h4 class="product-loading">Loading...</h4>`;

        const params=new URLSearchParams(window.location.search);
        const id=params.get('id');    

        const response=await fetch(`${End_Point}${id}`);
        
        const data=await response.json();
     
        displayProduct(data)

    } catch (error) {

        productDOM.innerHTML=`<p class="error">There was an error with loading the product please try again later</p>`;
    }


    
}

const displayProduct=(product)=>{

    
    const {company,colors,description,name:title,price,image}=product.fields;
   

    const {url:img}=image[0];
    document.title=title.toUpperCase();

    const formatPrice=price/100;

    const colorsList=colors.map((item)=>`<span class="product-color" style="background:${item}"></span>`).join(" ");


    productDOM.innerHTML=`

    <div class="product-wrapper">
            <img src="${img}" alt="${title}"class="img" />

            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>${formatPrice}</span>

                <div class="colors">${colorsList} </div>

                <p>${description}</p>

                <button class="btn">add to cart</button>


            </div>

        </div>
    
    
    `

   
    
}


const start =async()=>{
    const data=await fetchProduct();
    displayProduct(data);
}

start();