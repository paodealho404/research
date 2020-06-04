'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('answersParticipants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      Q1: {
        type: Sequelize.INTEGER
      },
      Q2: {
        type: Sequelize.INTEGER
      },
      Q3: {
        type: Sequelize.INTEGER
      },
      Q4: {
        type: Sequelize.INTEGER
      },
      Q5: {
        type: Sequelize.INTEGER
      },
      Q6: {
        type: Sequelize.INTEGER
      },
      Q7: {
        type: Sequelize.INTEGER
      },
      Q8: {
        type: Sequelize.INTEGER
      },
      Q9: {
        type: Sequelize.INTEGER
      },
      Q10: {
        type: Sequelize.INTEGER
      },
      Q11: {
        type: Sequelize.INTEGER
      },
      Q12: {
        type: Sequelize.INTEGER
      },
      Q13: {
        type: Sequelize.INTEGER
      },
      Q14: {
        type: Sequelize.INTEGER
      },
      Q15: {
        type: Sequelize.INTEGER
      },
      Q16: {
        type: Sequelize.INTEGER
      },
      openQuestion1: {
        type: Sequelize.STRING
      },
      openQuestion2: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('answersParticipants');
  }
};