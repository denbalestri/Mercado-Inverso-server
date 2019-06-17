let {Sequelize,db} =require('../db');

class offerConfirmation extends Sequelize.Model {}
offerConfirmation.init({
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  },
  trader_id:Sequelize.INTEGER,
  supplier_id:Sequelize.INTEGER,
  post_id:Sequelize.INTEGER,
  cancelled:Sequelize.INTEGER,
}, { sequelize:db, modelName: 'offersconfirmation',timestamps: false,underscored:false,freezeTableName: true,tableName:'offersconfirmation' });

module.exports=offerConfirmation;