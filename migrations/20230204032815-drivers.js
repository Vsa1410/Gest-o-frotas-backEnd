'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("drivers", {

      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      createdAt:{
        type:Sequelize.DATE,

      },
      updatedAt:{
        type:Sequelize.DATE,
      },
    })
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTabre("drivers");
   
  }
};
