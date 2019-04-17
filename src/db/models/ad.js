'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ad = sequelize.define('Ad', {
    productName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Ad.associate = function(models) {
    // associations can be defined here
  };
  return Ad;
};