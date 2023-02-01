import get from './getElement.js';



const displayDrinks=async({drinks})=>{
 
    const section=get('.section-center');
    const title=get('.title');

    if(!drinks){
        //hide loading
        title.textContent=`sorry ,no drinks matched your search`;
        section.innerHTML=null;
        return ;
    }

    const newDrinks=drinks.map((drink)=>{

  
        const {idDrink:id,strDrinkThumb:image,strDrink:name}=drink;


        return ` <a href="drink.html">

        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="${name}" >
          <h3>${name}</h3>
        </article>

      </a>`
    }).join("");


    title.textContent="";
    section.innerHTML=newDrinks;


    //hide loding

    return section;



}

export default displayDrinks;