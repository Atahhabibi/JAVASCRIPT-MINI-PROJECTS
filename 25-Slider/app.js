import get from './getElement.js';
import {people} from './data.js'

const prevBtn=get('.prev-btn');
const nextBtn=get('.next-btn');

// const imgDOM=get('.img');
// const nameDOM=get('.slide h4');
// const titleDOM=get('.title');
// const textDOM=get('.text');

const Container=get('.slide-container');

Container.innerHTML=people.map((person,slideIndex)=>{

    let position='next';

    if(slideIndex===0){
        position='active';
    }

    if(slideIndex===people.length-1){
      position='last';
    }


    const {img,name,text,job}=person;

    return ` 
    
    <article class="slide ${position}">

          <img src="${img}" alt="${name}" class="img">
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>

    </article>`

}).join("");


const startSlider=(type)=>{

    const active=get('.active');
    const last=get('.last');
    let next=active.nextElementSibling;

    if(!next){
        next=Container.firstElementChild;
    }

    active.classList.remove(['active']);
    last.classList.remove(['last']);
    next.classList.remove(['next']);


    if(type==='prev'){

        active.classList.add('next');
        last.classList.add('active')
        
        next=last.previousElementSibling;

        if(!next){
            next=Container.lastElementChild;
        }

        next.classList.add('last')

        return;
    }



    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');

   


}


nextBtn.addEventListener('click',()=>{
    startSlider();
})

prevBtn.addEventListener('click',()=>{
    startSlider('prev');
})






