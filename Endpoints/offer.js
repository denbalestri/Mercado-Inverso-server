const routes=require('express').Router();
const model=require('../models/OfferModel')
const stateModel=require('../models/StateModel')
const postModel=require('../models/PostModel')
const pickupzoneModel=require('../models/PickupZoneModel')
const offerconfirmationModel=require('../models/offerconfirmationModel')
let {Sequelize,db} =require('./../db');

routes.post('/',function(request,response){
 console.log(request.body)

model.hasMany(stateModel,{foreignKey: 'id',sourceKey: 'state'},)
//stateModel.belongsTo(model, {foreignKey: 'state'})

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
       //console.log(data)
        
    })
})

routes.post('/postOffer',function(request,response){
    console.log(request.body)
   
   model.hasMany(stateModel,{foreignKey: 'id',sourceKey: 'state'},)
   //stateModel.belongsTo(model, {foreignKey: 'state'})
   
   model.hasMany(pickupzoneModel, {foreignKey: 'id',sourceKey: 'pickupzone_id'})
   
   
       model.findAll({
                 where:{post_id:request.body.post_id},include: 
                 [{ model: stateModel, 
                    as: 'states',
                    required: true},
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

routes.post('/confirm',function(request,response){
   
       model.update({
           state:request.body.state
       },{
                where:{id:request.body.offer_id}
       }).then(data=>{
           //response.json(data);
            //console.log(data)
        model.findOne({
            where:{id:request.body.post_id}
        }).then(data=>{
            
            offerconfirmationModel.create({
                post_id:request.body.post_id,
               supplier_id:request.body.user_id,
               trader_id:data.user_id,
                cancelled:0
               
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
           
       })
   })



module.exports=routes;