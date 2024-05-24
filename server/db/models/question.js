'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Topic}) {
      this.belongsTo(Topic, {foreignKey: 'topic_id'})
    }
  }
  Question.init({
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    topic_id: {
      type: DataTypes.INTEGER,
      
      references: {
        model: 'Topics',
        key: 'id'
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",

    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};