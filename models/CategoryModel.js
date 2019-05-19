let {Sequelize,db} =require('../db');

class Category extends Sequelize.Model {}
Category.init({
  idCategory:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  },
  description:Sequelize.STRING,
}, { sequelize:db, modelName: 'category',timestamps: false,underscored:false,freezeTableName: true,tableName:'category' });

module.exports=Category;