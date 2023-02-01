
function getElement(selection,all){

    let element;

    if(all && selection){
       element=[...document.querySelectorAll(selection)];
       
       if(element.length===0)throw new Error(`Did not select right selection:=>${selection} `)
       else return element;
       
    }

    else if(selection){

        element=document.querySelector(selection);

        if(element) return element
        else throw new Error(`Did not select right selection::=>${selection} `);
        
    }


}

export default getElement;