'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topics', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Topic.associate = function(models) {
    //associations
  };
  Topic.hasMany(models.Banner, {
    foreignKey: "topicId",
    as: "banners",
  });
  
  return Topic;
};