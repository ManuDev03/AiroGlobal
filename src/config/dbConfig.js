require('dotenv').config()
const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PWD,{
    host:process.env.DB_HOST,
    dialect:'mssql',//msql2 for mysql
    port:process.env.DB_PORT,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    define:{
        timestamp:false,
        freezeTableName:true
    }

})

module.exports = sequelize