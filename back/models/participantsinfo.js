'use strict';
module.exports = (sequelize, DataTypes) => {
  const participantsInfo = sequelize.define('participantsInfo', {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true
    },
    name: {
      type:DataTypes.STRING
    },
    age: {
      type:DataTypes.STRING
    },
    gender: {
      type:DataTypes.STRING
    },
    educationalLevel: {
      type:DataTypes.STRING
    },
    studyDomain: {
      type:DataTypes.STRING
    },
    Q1: {
      type:DataTypes.STRING
    },
    Q2: {
      type:DataTypes.STRING
    },
    Q3: {
      type:DataTypes.STRING
    },
    Q4: {
      type:DataTypes.STRING
    },
    Q5: {
      type:DataTypes.STRING
    },
    Q6: {
      type:DataTypes.STRING
    },
    Q7:{
      type:DataTypes.STRING
    },
    Q8: {
      type:DataTypes.STRING
    },
    Q9: {
      type:DataTypes.STRING
    },
    Q10: {
      type:DataTypes.STRING
    },
    Q11: {
      type:DataTypes.STRING
    },
    Q12: {
      type:DataTypes.STRING
    },
    Q13: {
      type:DataTypes.STRING
    },
    Q14: {
      type:DataTypes.STRING
    },
    Q15: {
      type:DataTypes.STRING
    },
    Q16: {
      type:DataTypes.STRING
    },
    openQuestion1: {
      type:DataTypes.STRING
    },
    openQuestion2: {
      type:DataTypes.STRING
    },
    Q17: {
      type:DataTypes.STRING
    },
    Q18: {
      type:DataTypes.STRING
    },
    Q19: {
      type:DataTypes.STRING
    },
    Q20: {
      type:DataTypes.STRING
    },
    Q21: {
      type:DataTypes.STRING
    },
    Q22: {
      type:DataTypes.STRING
    },
    Q23: {
      type:DataTypes.STRING
    },
    Q24: {
      type:DataTypes.STRING
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  participantsInfo.associate = function(models) {
    // associations can be defined here
  };
  return participantsInfo;
};