

const paginate = (followers) => {

   const itemsPerpage=9;
   const numberOfPage=Math.ceil(followers.length/itemsPerpage);

   const newFollwers=Array.from({length:numberOfPage},(_,index)=>{

          const start=index*itemsPerpage;

          return followers.slice(start,start+itemsPerpage)
   })



   return newFollwers;



}

export default paginate
