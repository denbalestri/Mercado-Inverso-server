let {Sequelize,db} =require('../db');

class Rol extends Sequelize.Model {}
Rol.init({
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  },
  description:Sequelize.STRING,
}, { sequelize:db, modelName: 'rol',timestamps: false,underscored:true });

module.exports=Rol;