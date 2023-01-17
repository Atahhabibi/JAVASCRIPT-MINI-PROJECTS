const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.querySelector('#btn');
const colorSpan=document.querySelector('.color');



const randomIndex=()=>{
    let RandomValue=Math.floor(Math.random()*colors.length);
    return RandomValue;
}

console.log(randomIndex());

btn.addEventListener('click',function(){
   let color; 
   color=colors[randomIndex()];
   document.body.style.backgroundColor=color;
   colorSpan.textContent=color;

})

