const routes=require('express').Router();
const model=require('../models/RolModel')

//get all rols

routes.get('/',function(request,response){
 
    model.findAll({
              
    }).then(data=>{
        response.json(data);
        
    })
})

module.exports=routes;