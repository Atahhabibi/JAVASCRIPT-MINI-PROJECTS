import display from "./displayFollowers.js";


const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {

    try {
        const response=await fetch(url);
        const result=await response.json();
        return result;
       

    } catch (error) {
        console.log(error);
    }

   


}

export default fetchFollowers
