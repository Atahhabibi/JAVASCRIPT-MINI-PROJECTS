
const slides=document.querySelectorAll('.slide');
const nextBtn=document.querySelector('.nextBtn')
const prevBtn=document.querySelector('.prevBtn')

let counter=0;


slides.forEach(function(slide,index){
    slide.style.left=`${index*100}%`;
    
})




nextBtn.addEventListener('click',function(){
    
    counter++;

    if(counter>slides.length-1){
        counter=0;
    }
    carousel();
 
})

prevBtn.addEventListener('click',function(){
    
    counter--;
    if(counter<0){
        counter=slides.length-1;
    }
    carousel();
})




function carousel(){

    if(counter<slides.length-1){
        nextBtn.style.display='block';
    }else{
        nextBtn.style.display='none';
    }

    if(counter>0){
        prevBtn.style.display='block';
    }else{
        prevBtn.style.display='none'
    }


    slides.forEach(function(slide){
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}

prevBtn.style.display='none';
