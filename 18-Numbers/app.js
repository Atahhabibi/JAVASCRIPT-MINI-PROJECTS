
const items=Array.from(document.querySelectorAll('.number'));

const updateCount=(el)=>{
   const value=parseInt(el.dataset.value);
   const increment=Math.ceil(value/1000);
   let intialValue=0;

   const increaseCount=setInterval(() => {
       intialValue+=increment;

       if(intialValue>value){
           el.textContent=`${value}+`;
           clearInterval(increaseCount)
           return;
       }

       el.textContent=`${intialValue}+`

   }, 1);
   


}

items.forEach((item)=>{
    updateCount(item)

})










