module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {

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
      type: DataTypes.STRING,
      allowNull: false
          
    },

    overallExperience: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });

    return Review;
};