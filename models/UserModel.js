let {Sequelize,db} =require('./../db');

class User extends Sequelize.Model {}
User.init({
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  password:Sequelize.STRING,
  email:Sequelize.STRING,
  birthdate:Sequelize.DATE,
  activated_at:Sequelize.DATE,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
  deleted_at:Sequelize.DATE,
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  }
}, { sequelize:db, modelName: 'user',underscored:true });

module.exports=User;