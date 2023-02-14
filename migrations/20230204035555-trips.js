'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable("trips", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      date:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      from:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      departure:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      arrive:{
        type: Sequelize.DATE,
        allowNull:false
      },
      startKM:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      finalKM:{
        type: Sequelize.INTEGER,
        allowNull:false,

      },
      notes:{
        type:Sequelize.STRING,

      },
      driverId:{
        type: Sequelize.STRING,
        allowNull:false
    
      },
      carId:{
        type:Sequelize.STRING,
        allowNull:false

      },
      createdAt:{
        type:Sequelize.DATE

      },
      updatedAt:{
        type:Sequelize.DATE
      }

    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable("trips")
  }
};
