const url='https://randomuser.me/api/';

const getUser=async()=>{

    const response=await fetch(url);
    const data=await response.json();
    const person=data.results[0];
    const{email,phone}=person;
    const {large:image}=person.picture;
    const {password}=person.login;
    const {first,last}=person.name;
    const{dob:{age}}=person;
    const {street:{number,name}}=person.location;

    return {
        phone,email,image,password,age,name:`${first} ${last}`,street:`${number}${name}`
    }
}

export default getUser;