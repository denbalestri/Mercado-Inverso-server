const routes=require('express').Router();
const model=require('../models/PostModel')


routes.get('/',function(request,response){
 
    model.findAll({
              
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})

routes.post('/createPost',function(request,response){
    console.log(request.body)
   

    model.create({
        title:request.body.title,
        description:request.body.description,
        price:request.body.price,
        quantity:request.body.quantity,
        image:request.body.image,
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