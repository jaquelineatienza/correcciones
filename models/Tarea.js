const { sequelize,DataTypes}= require('../database/db');
const Tarea = sequelize.define('tareas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    codigo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue:sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateAt:{
        type:DataTypes.DATE,
        allowNull:true,
    }
    ,
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }

},{
    createdAt:true,
    updatedAt:true,
    deletedAt:true,
    tableName:'tareas'
    });
    Tarea.sync();

module.exports = Tarea;   