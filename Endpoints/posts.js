const routes=require('express').Router();
const model=require('../models/PostModel')


routes.get('/',function(request,response){
 
    model.findAll({
        order:[['id','DESC']]
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})
routes.post('/OwnPost',function(request,response){

    model.findAll({
             where:{user_id:request.body.user_id},
             order:[['id','DESC']]
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})

routes.post('/search',function(request,response){
   
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
        where:search,
        order:[['id','DESC']]  
    }).then(data=>{
        response.json(data);
        //console.log(data)
        
    })




})

routes.post('/createPost',function(request,response){
    
   

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