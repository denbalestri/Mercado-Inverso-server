let {Sequelize,db} =require('./../db');
const stateModel=require('../models/StateModel')
class Offer extends Sequelize.Model {}
Offer.init({
  description: Sequelize.STRING,
  price:Sequelize.INTEGER,
  quantityavailable:Sequelize.INTEGER,
  pickupzone_id:Sequelize.INTEGER,
  user_id:Sequelize.INTEGER,
  post_id:Sequelize.INTEGER,
  state:Sequelize.INTEGER,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
  deleted_at:Sequelize.DATE,
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,
  }
}, { sequelize:db, modelName: 'offer',underscored:true,freezeTableName: true,tableName:'offer',timestamps:true});


module.exports=Offer;