const articlesContainer=document.querySelector('.articles');
const toggleBtn=document.querySelector('.btn');

toggleBtn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark-theme')
  })
  

const articlesData=articles.map((item)=>{

    const formatDate=moment(item.date).format('MMMM Do ,YYYY')

   return `<article class="post">

  <h2>${item.title}</h2>

  <div class="post-info">
    <span>${formatDate}</span>
    <span>${item.length} min read</span>
  </div>

  <p>${item.snippet}</p>

</article>`

}).join("");

articlesContainer.innerHTML=articlesData;










