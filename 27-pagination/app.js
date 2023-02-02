import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'
import get from './getElement.js'


const title=get('.section-title h1');
const btnContainer=get('.btn-container');


let index=0;
let pages=[];

const setupUI=()=>{
    displayFollowers(pages[index]);
    displayButtons(btnContainer,pages,index)
}


const init=async()=>{
    const follwers=await fetchFollowers();
    title.textContent='pagination';
    pages=paginate(follwers);
    setupUI();

 
}

btnContainer.addEventListener('click',(e)=>{

if(e.target.classList.contains('btn-container'))return;

  if(e.target.classList.contains('page-btn'))
    {
     index=parseInt(e.target.dataset.index);
    }

  if(e.target.classList.contains('next-btn'))
  {
       index++;
       if(index>pages.length-1){
           index=0;
       }
   }

  if(e.target.classList.contains('prev-btn'))
   {
       index--;
       if(index<0){
           index=pages.length-1;
       }
   }


    setupUI();
})



window.addEventListener('load',init)
