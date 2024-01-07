// const { DataTypes } = require('sequelize');
// // const sequelize = new Sequelize('sqlite::memory:'); to connect data and we can use this it every files  files
// const sequelize = require("./index");


//

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {    // User Model name
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue: "LAST NAME"
            // allowNull defaults to true
        },
        // fullName : {
        //    type : DataTypes.VIRTUAL,
        //    get(){
        //      return `${this.firstName} ${this.lastName}`
        //    },
        //    set(value){
        //       throw new Error('Cannot set');
        //    }
        // },
        password: {
            type: DataTypes.STRING,
            allowNull: false ,
            u
        },
        set(value) {
            this.setDataValue('password', hash(value));
        }
    }, {
        // Other model options go here
        // sequelize, // We need to pass the connection instance
        // modelName: 'User' // We need to choose the model name
        tableName: 'user',
        // timestamps : false, //
        createdAt: false, //]
        updatedAt: "lastUpdate"

    });

    // // INSTEAD OF VIRTUAL FUNCTION U CAN ALSO USE THIS
    // User.prototype.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // };

    return User;
}


// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
