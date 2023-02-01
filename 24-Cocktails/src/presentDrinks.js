import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";



const showDrinks=async(url)=>{

  const data=await fetchDrinks(url);
  const section=await displayDrinks(data);
  
 






  




}


export default showDrinks;