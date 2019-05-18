const axios=require('axios');


const endpoints={
    post:'http://localhost:3001/posts',
    rols:'http://localhost:3001/rols'
}
/*Proveedor*/ 
//get all posts
function getPosts(){

    return axios.get(endpoints.post)
}
//get a post
function getPost(){

    return axios.get(endpoints.post + id);
}
//tender a post 
function tenderPost(){
    return axios.get(endpoints.post + id);

}


function getRols(){

    return axios.get(endpoints.rols); 
}


