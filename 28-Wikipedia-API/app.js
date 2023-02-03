import get from './getElement.js'
const url ='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const page_url = 'http://en.wikipedia.org/?curid=';


const formDOM=get('.form')
const InputDOM=get('.form-input');
const resultDOM=get('.results');
const articlesDOM=get('.articles');


formDOM.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value=InputDOM.value;
    if(!value){
        resultDOM.innerHTML=`<div class="error">Please enter valid search term</div>`
        return;
    }

    fetchPages(value);
 
})


const fetchPages=async(searchValue)=>{

    resultDOM.innerHTML=`<div class="loading"></div>`

  try {
      const response= await fetch(`${url}${searchValue}`);
      const data=await response.json();
      const results=data.query.search;

      if(results.length<1){
        resultDOM.innerHTML=`<div class="error">no matching results. Please try again</div>`
        return ; 
      }

      renderResults(results);
      

  } catch (error) {

    resultDOM.innerHTML=`<div class="error">there was an error.....</div>`

  }
}

const renderResults=(data)=>{
    

    const cardsList=data.map((item)=>{

        const{title,snippet,pageid}=item;
        
        return `

        <a href="${page_url}${pageid}" target="_blank">
          <h4>${title}</h4>
          <p>${snippet}</p>
        </a>

        `
    }).join("");

    resultDOM.innerHTML=`  <div class="articles">${cardsList}</div>`

   
    
}
