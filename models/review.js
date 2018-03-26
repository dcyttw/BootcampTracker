module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
      // ReviewID: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
        
      // },

      bootcampName: {
          type: DataTypes.STRING,
          allowNull: false,

      },

      curriculum: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      instructor: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      jobAssistance: {
        type: DataTypes.INTEGER,
        allowNull: true
      }, 

      jobFound: {
          type: DataTypes.STRING,
          allowNull: false,
      },

      jobPosition: {
          type: DataTypes.STRING,
          allowNull: false,

      },

      salaryRange: {
          type: DataTypes.INTEGER,
          allowNull: false
          
      },

    });

    return Review;
  };