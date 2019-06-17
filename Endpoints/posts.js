const routes=require('express').Router();
const model=require('../models/PostModel')


routes.get('/',function(request,response){
 
    model.findAll({
              
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})
routes.post('/OwnPost',function(request,response){
 console.log(request.body)
    model.findAll({
             where:{user_id:request.body.user_id}
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})

routes.post('/search',function(request,response){
   console.log(request.body);
    let search='';

   if(request.body.categorySelected=='' && request.body.search!=''){
    search={title:request.body.search}
   }
   else if(request.body.search=='' && request.body.categorySelected!=''){
       search={category:request.body.categorySelected}
   }
   else{
    search={title:request.body.search,category:request.body.categorySelected}
   }
  
    model.findAll({
        where:search     
    }).then(data=>{
        response.json(data);
        //console.log(data)
        
    })




})

routes.post('/createPost',function(request,response){
    console.log(request.body)
   

    model.create({
        title:request.body.title,
        description:request.body.description,
        price:request.body.price,
        quantity:request.body.quantity,
        category:request.body.category,
        user_id:request.body.user_id
        
    })
    .then(data=>{
        response.status(200);
        response.json(data.get({plain: true}));
        


    }).catch(error=>{
        response.send(error)
    })  
        


})



module.exports=routes;