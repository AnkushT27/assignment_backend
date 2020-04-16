const sequelize = require('sequelize');
const sql = require('../util/db');

module.exports = sql.define('user',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: sequelize.STRING,
        allowNull:false
    },
    email:{
        type: sequelize.STRING,
        allowNull:false
    }
},{
    timestamps:false
})