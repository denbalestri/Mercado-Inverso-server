const Sequelize=require('sequelize');
const db = new Sequelize('mysql://root:root1234@localhost:3306/mydb');



module.exports={Sequelize,db};



