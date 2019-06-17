let usersRoutes=require('./Endpoints/users')
let rolsUserRoutes=require('./Endpoints/roluser')
let rolsRoutes=require('./Endpoints/rols')
let categoryRoutes=require('./Endpoints/category')
let postsRoutes=require('./Endpoints/posts')
let offerRoutes=require('./Endpoints/offer')
let pickupzoneRoutes=require('./Endpoints/pickupzone')
let stateRoutes=require('./Endpoints/state')
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
app.use('/category',categoryRoutes);
app.use('/posts',postsRoutes)
app.use('/offer',offerRoutes)
app.use('/pickupzone',pickupzoneRoutes)
app.use('/state',stateRoutes)
app.listen(3001)
