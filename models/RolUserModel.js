let {Sequelize,db} =require('../db');

class RolUser extends Sequelize.Model {}
RolUser.init({
  user_id:Sequelize.INTEGER,
  rol_id:Sequelize.INTEGER,
}, { sequelize:db, modelName: 'rolUser',timestamps: false,underscored:true });

module.exports=RolUser;