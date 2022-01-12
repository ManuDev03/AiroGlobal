const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");

const Student = sequelize.define("tbl_students", {
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
    unique:true
  },
  studentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rollNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mark1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mark2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Student
