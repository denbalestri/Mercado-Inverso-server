let {Sequelize,db} =require('./../db');

class Post extends Sequelize.Model {}
Post.init({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price:Sequelize.INTEGER,
  quantity:Sequelize.INTEGER,
  image:Sequelize.STRING,
  category:Sequelize.INTEGER,
  user_id:Sequelize.INTEGER,
  id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true,

  }
}, { sequelize:db, modelName: 'post',timestamps: false,underscored:true,freezeTableName: true,tableName:'post'  });

module.exports=Post;