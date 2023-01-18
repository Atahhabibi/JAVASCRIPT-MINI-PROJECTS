const sidebar_btn=document.querySelector('.sidebar-toggle');
const sidebar=sidebar_btn.nextElementSibling;
const close_btn=document.querySelector('.close-btn');


sidebar_btn.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
})

close_btn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})


