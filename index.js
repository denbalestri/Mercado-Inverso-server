let usersRoutes=require('./Endpoints/users')
let rolsUserRoutes=require('./Endpoints/roluser')
let rolsRoutes=require('./Endpoints/rols')
const express=require('express');
const app=express();
let bodyParser=require('body-parser')
var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(request,response){
  response.end('');
})

app.use('/users',usersRoutes);
app.use('/roluser',rolsUserRoutes);
app.use('/rols',rolsRoutes);

app.listen(3001)
