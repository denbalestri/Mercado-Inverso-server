const routes=require('express').Router();
const model=require('./../models/UserModel')
const rolUserModel=require('../models/RolUserModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

//attributes:['userName','password'],
//get all users with filters
routes.post('/check',function(request,response){
    console.log(request.body)

    model.findOne({
        where:{'email':request.body.email}      
    }).then(user=>{
       
         // Load hash from your password DB.
         bcrypt.compare(request.body.password, user.password, function(err, result) {
           
            if(result) {
                rolUserModel.findOne({
                    where:{'user_id':user.id}      
                        }).then(userfound=>{

                            response.send(userfound);

                        })
                        .catch(err=> {
                            response.send(false)
                            console.log(err);
                        });
            
            // response.send(user)
                
            } else {
              
             response.send(false)
            
            } 
          });

    })
    .catch(err=> {
        response.send(false)
        console.log(err);
    });

    
   
})

//update a user
routes.patch('/',function(request,response){

model.update(request.body,{

    where:{id:1}
})


})

//set a user
routes.post('/create',function(request,response){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(request.body.password, salt, function(err, hash) {
            // Store hash in your password DB.

           
            model.create({
                first_name:request.body.first_name,
                last_name:request.body.last_name,
                password:hash,
                birthdate:request.body.birthdate,
                email:request.body.email,
                
            })
            .then(user=>{
                    
                    rolUserModel.create({
                            rol_id:request.body.rol,
                            user_id:user.id,
                            
                    

                    })
                    .then(data=>{
                       
                
                        response.status(200);
                        response.json(data.get({plain: true}));
                        
                    })
                    .catch(err=> {
                        // print the error details
                       
                        response.send(err)
                       
                    });

               

            })
            .catch(err=> {
                // print the error details
                andreresponse.send(err)
                console.log(err);
            });



        });
    

})
})


//export the route
module.exports=routes;