let {Sequelize,db} =require('../db');

class PickupZone extends Sequelize.Model {}
PickupZone.init({
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  },
  description:Sequelize.STRING,
}, { sequelize:db, modelName: 'pickupzone',freezeTableName: true,tableName:'pickupzone',timestamps: false,underscored:true, });

module.exports=PickupZone;