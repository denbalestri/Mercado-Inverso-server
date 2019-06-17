const routes=require('express').Router();
const model=require('../models/OfferModel')
const stateModel=require('../models/StateModel')
const pickupzoneModel=require('../models/PickupZoneModel')
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



module.exports=routes;