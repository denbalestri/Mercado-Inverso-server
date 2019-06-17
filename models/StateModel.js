let {Sequelize,db} =require('../db');

class State extends Sequelize.Model {}
State.init({
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  },
  description:Sequelize.STRING,
}, { sequelize:db, modelName: 'states',timestamps: false,underscored:true ,freezeTableName: true,tableName:'states'});
module.exports=State;