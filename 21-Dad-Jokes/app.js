
const url="https://icanhazdadjoke.com/sss";
const btn=document.querySelector('.btn');
const result=document.querySelector('.result')

btn.addEventListener('click',async()=>{
   fetchDadJoke();
})


const fetchDadJoke=async()=>{

   try {

      result.textContent='Loading...';
      
      const response=await fetch(url,{ 
   
         headers:{
            Accept:'application/json',
            'User-Agent':'learning app',
         },
      });

      
      
      const data= await response.json();
    
      if(!response.ok){
         throw new Error(`There was am error : ${data.message}`);
      }
      result.textContent=data.joke;
      
   } catch (error) {
      console.log(error);
      result.textContent=`There was an error....`
   }

}

fetchDadJoke();