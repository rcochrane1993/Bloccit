'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rule = sequelize.define('Rule', {
    description: DataTypes.STRING,
    Topicid: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Topic",
        key: "id",
        as: "topicId"
      }
    }
  }, {
    classMethods: {
      associate: function(models){
        Rule.belongsTo(models.Topic, {
          foreignKey: "topicId",
          onDelete: "CASCADE",
        })
      },
    }
  });
  
  return Rule;
};