const routes=require('express').Router();
const model=require('../models/CategoryModel')


routes.get('/',function(request,response){
 
    model.findAll({
              
    }).then(data=>{
        response.json(data);
       // console.log(data)
        
    })
})

module.exports=routes;