'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("cars", {
      id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
      },
      plate:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      brand:{
        type: Sequelize.STRING,
        allowNull:false,

      },
      model:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      currentKM:{
        type: Sequelize.INTEGER,
        allowNull:false,

      },
      nextOilChange:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt:{
        type:Sequelize.DATE
      },
      updatedAt:{
        type:Sequelize.DATE,
      }

    })
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable("cars")

  }
};
