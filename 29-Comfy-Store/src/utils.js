//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products'
const singleProductUrl ='https://course-api.com/javascript-store-single-product?id='


const formatPrice = (price) => {

  let formattedPrice=new Intl.NumberFormat('en-US',
  {
    style:"currency",
    currency:"USD",
  }).format((price/100).toFixed(2))

  return formattedPrice;

}

const getStorageItem = (name) => {
  let storageItem=localStorage.getItem(name);
  if(storageItem){
    storageItem=JSON.parse(localStorage.getItem(name))
  }else{
    storageItem=[]
  }
  return storageItem;
}

const setStorageItem = (name,item) => {
 localStorage.setItem(name,JSON.stringify(item))
}

export {
  allProductsUrl,
  singleProductUrl,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
