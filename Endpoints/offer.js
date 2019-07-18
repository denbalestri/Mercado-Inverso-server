const routes=require('express').Router();
const model=require('../models/OfferModel')
const stateModel=require('../models/StateModel')
const postModel=require('../models/PostModel')
const pickupzoneModel=require('../models/PickupZoneModel')
const offerconfirmationModel=require('../models/offerconfirmationModel')
let {Sequelize,db} =require('./../db');
const Constants=require('../constants/statesOffer')

routes.post('/',function(request,response){


model.hasMany(stateModel,{foreignKey: 'id',sourceKey: 'state'},)


model.hasMany(pickupzoneModel, {foreignKey: 'id',sourceKey: 'pickupzone_id'})


    model.findAll({
              where:{user_id:request.body.user_id},include: 
              [{ model: stateModel, 
                 as: 'states',
                 required: true},
                 { model: pickupzoneModel,
                 as: 'pickupzones',
                 required: true
              }]
              

    }).then(data=>{
        response.json(data);
      
        
    })
})


routes.post('/confirmed',function(request,response){
    
   
   model.hasMany(stateModel,{foreignKey: 'id',sourceKey: 'state'},)
   //stateModel.belongsTo(model, {foreignKey: 'state'})
   
   model.hasMany(pickupzoneModel, {foreignKey: 'id',sourceKey: 'pickupzone_id'})
   
   model.hasMany(postModel, {foreignKey: 'id',sourceKey: 'post_id'})

       model.findAll({
                 where:{state:Constants.CONFIRMED},include: 
                 [{ model: stateModel, 
                    as: 'states',
                    required: true},
                    { model: pickupzoneModel,
                    as: 'pickupzones',
                    required: true},
                    {
                        model: postModel,
                        as: 'posts',
                        required: true,
                        where:{user_id:request.body.user_id} 
                    }
                 ]
                 
   
       }).then(data=>{
           response.json(data);
         
           
       })
   })

routes.post('/postOffer',function(request,response){

   
   model.hasMany(stateModel,{foreignKey: 'id',sourceKey: 'state'},)

   
   model.hasMany(pickupzoneModel, {foreignKey: 'id',sourceKey: 'pickupzone_id'})
   
   
       model.findAll({
                 where:{post_id:request.body.post_id,state:Constants.PENDING},include: 
                 [{ model: stateModel, 
                    as: 'states',
                    required: true,
                   
                },
                    { model: pickupzoneModel,
                    as: 'pickupzones',
                    required: true
                 }]
                 
   
       }).then(data=>{
           response.json(data);
          //console.log(data)
           
       })
   })


routes.post('/createOffer',function(request,response){
  
  

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
     
        response.status(200);
        response.json(data.get({plain: true}));
        


    }).catch(error=>{
        response.send(error)
      
    })  
        


})

routes.post('/confirm',function(request,response){
   
       model.update({
           state:Constants.CONFIRMED
       },{
                where:{id:request.body.offer_id}
       }).then(data=>{
           
        model.findOne({
            where:{id:request.body.post_id}
        }).then(data=>{
            
            offerconfirmationModel.create({
                post_id:request.body.post_id,
               supplier_id:data.user_id,
               trader_id:request.body.user_id,
                cancelled:Constants.NOCANCELLED
               
            })
            .then(data=>{
                
                response.status(200);
                response.json(data.get({plain: true}));
                
        
        
            }).catch(error=>{
                response.send(error)
               
            })  
        })
           
       })
   })

   routes.post('/cancel',function(request,response){
 
    model.update({
        state:Constants.CANCELLED
    },{
             where:{id:request.body.offer_id}
    }).then(data=>{
        //response.json(data);
         //console.log(data)
     model.findOne({
         where:{id:request.body.offer_id}
     })
     
     .then(data=>{
        
         offerconfirmationModel.update({
             cancelled:Constants.CANCELLED},{
            where:{post_id:data.post_id}
             }
         )
         .then(data=>{
           
             response.status(200);
             response.json(data.get({plain: true}));
             
     
     
         }).catch(error=>{
             response.send(error)
           
         })  
     })
        
    })
})



module.exports=routes;