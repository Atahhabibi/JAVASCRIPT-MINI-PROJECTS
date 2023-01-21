// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

const alert=document.querySelector('.alert');
const form=document.querySelector('.grocery-form');
const  grocery=document.getElementById('grocery');
const submitBtn=document.querySelector('.submit-btn');
const container=document.querySelector('.grocery-container');
const list=document.querySelector('.grocery-list');
const ClearBtn=document.querySelector('.clear-btn');

let editElement;
let editFlag=false;
let editID='';


form.addEventListener('submit',addItem);

ClearBtn.addEventListener('click',clearItems);



function addItem(e){
    
    e.preventDefault();
    const value=grocery.value;

    const id=new Date().getTime().toString();

    if(value && !editFlag){

       

        const element=document.createElement('article');
        element.classList.add("grocery-item");
        const attr=document.createAttribute('data-id');
        attr.value=id;
        element.setAttributeNode(attr);

        element.innerHTML=` <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
              <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>`

        //append child
        list.appendChild(element);

        const deleteBtn=document.querySelector('.delete-btn');
        const editBtn=document.querySelector('.edit-btn');

        deleteBtn.addEventListener('click',deleteItem)
        editBtn.addEventListener('click',editItem)


        displayAlert('item added to the list','success');
        container.classList.add('show-container');

        // add to local storage

        addToLocalStorage(id,value);

        setBackToDefault();


    }

    else if(value && editFlag){
        console.log('editing');

    }

    else{
        displayAlert('empty value','danger')
      
    }
    
    
   
   
}


//display alert 

function displayAlert(text,action){

    alert.textContent=text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.textContent="";
        alert.classList.remove(`alert-${action}`)
    },1000);
        

}

//set back to default

function setBackToDefault(){
 grocery.value='';
 editFlag=false;
 editID='';
 submitBtn.textContent='submit';
}

//add to local storage

function addToLocalStorage(id,value){
  
}

function removeFromLocalStorage(id){

    
}





//clear item 

function clearItems(){
    const items=document.querySelectorAll('.grocery-item');

    if(items.length>0){

        items.forEach(function(item){
          list.removeChild(item);
        })

    }

    container.classList.remove('show-container')
    displayAlert('empty list','danger');
    setBackToDefault();
    //remove from local stroage
    

   
}

//delete function

function deleteItem(e){

    const element=e.currentTarget.parentElement.parentElement;
    const id=element.dataset.id;
    list.removeChild(element);


    if(list.children.length === 0){
        container.classList.remove('show-container');
    }

    displayAlert('Item removed','danger');

    setBackToDefault();

    removeFromLocalStorage(id);

}

function editItem(){
    console.log('item edit');
}
