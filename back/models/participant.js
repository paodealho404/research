'use strict';
module.exports = (sequelize, DataTypes) => {
  const participant = sequelize.define('participant', {
    id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    educational_level: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  participant.associate = function(models) {
    // associations can be defined here
    participant.hasOne(modes.survey, {foreignKey: 'participant_id'});
  };
  return participant;
};