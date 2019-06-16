const routes=require('express').Router();
const model=require('../models/OfferModel')


routes.get('/',function(request,response){
 
    model.findAll({
              
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})


routes.post('/createOffer',function(request,response){
    console.log(request.body)
  

    model.create({
        description:request.body.description,
        price:request.body.price,
        quantityavailable:request.body.quantityavailable,
        pickupzone_id:request.body.pickupzone_id,
        user_id:request.body.user_id,
        post_id:request.body.post_id,
        state:request.body.state,
       
    })
    .then(data=>{
        console.log(data);
        response.status(200);
        response.json(data.get({plain: true}));
        


    }).catch(error=>{
        response.send(error)
        console.log(error)
    })  
        


})



module.exports=routes;