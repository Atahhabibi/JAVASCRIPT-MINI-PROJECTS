import sublinks from './data.js';
import get from './getElement.js'

const toggleBtn=get('.toggle-btn');
const closeBtn=get('.close-btn');
const sidebarWrapper=get('.sidebar-wrapper');
const sidebar=get('.sidebar-links');
const linkBtns=get('.link-btn','all');
const submenu=get('.submenu');
const hero=get('.hero');
const nav=get('.nav');

toggleBtn.addEventListener('click',()=>{
    sidebarWrapper.classList.add('show');
})

closeBtn.addEventListener('click',()=>{
    sidebarWrapper.classList.remove('show');
})


sidebar.innerHTML=sublinks.map((item)=>{

    const{page,links}=item;
    return`

    <article>
    <h4>${page}</h4>

    <div class="sidebar-sublinks">

    ${links.map((link)=>{
       return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`
    }).join("")}

    
    </div>
    
    </article>
    
    `
}).join("");


linkBtns.forEach((btn)=>{

    btn.addEventListener("mouseover",function(e){

        const text=e.currentTarget.textContent;
        const tempBtn=e.currentTarget.getBoundingClientRect();
        const center=(tempBtn.left+tempBtn.right)/2;
        const bottom=tempBtn.bottom - 3;

        const tempPage=sublinks.find(({page})=>page===text);

        if(tempPage){

            const {links,page}=tempPage;
            submenu.classList.add('show')
            submenu.style.left=`${center}px`
            submenu.style.top=`${bottom}px`

            let columns='col-2'

            if(links.length===3){
                columns='col-3';
            }

            if(links.length > 3){
                columns='col-4'
            }


            submenu.innerHTML=`
            <section>
            <h4>${page}</h4>

            <div class="submenu-center ${columns}">

            ${links.map((link)=>{
                return `
                <a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>
                `
            }).join("")}
            
            </div>
            
            </section>
            
            `
        }


    })


})


hero.addEventListener('mouseover',()=>{
   submenu.classList.remove('show');
})

nav.addEventListener('mouseover',(e)=>{

    if(!e.target.classList.contains('link-btn')){
        submenu.classList.remove('show');
    }
})


