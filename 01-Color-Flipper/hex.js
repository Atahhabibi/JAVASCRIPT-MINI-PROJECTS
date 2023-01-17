const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.querySelector('#btn');
const colorSpan=document.querySelector('.color');


const randomIndex=()=>{

    let RandomValue=Math.floor(Math.random()*hex.length);

    return RandomValue;
}


console.log(randomIndex());

btn.addEventListener('click',function(){
   let color='#'; 
//    color=`
//    #${hex[randomIndex()]}${hex[randomIndex()]}${hex[randomIndex()]}${hex[randomIndex()]}${hex[randomIndex()]}${hex[randomIndex()]}`;

   for(let i=0;i<6;i++){
       color+=hex[randomIndex()]
   }
   
   document.body.style.backgroundColor=color;
   colorSpan.textContent=color;

})
