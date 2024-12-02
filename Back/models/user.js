// models/user.js
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const User = sequelize.define('User',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        email:{
            type: Sequelize.STRING,
            unique: true,
            allowNull:false
        },
        data_nasc:{
            type: Sequelize.DATE,
            allowNull: true
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }
    });
    return User;
};