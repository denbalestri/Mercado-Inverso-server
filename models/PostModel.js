let {Sequelize,db} =require('./../db');

class Post extends Sequelize.Model {}
Post.init({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price:Sequelize.INTEGER,
  quantity:Sequelize.INTEGER,
  category:Sequelize.INTEGER,
  user_id:Sequelize.INTEGER,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
  deleted_at:Sequelize.DATE,
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  }
}, { sequelize:db, modelName: 'post',underscored:true,freezeTableName: true,tableName:'post'  });

module.exports=Post;