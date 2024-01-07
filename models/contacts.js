// // const { DataTypes } = require('sequelize');
// // // const sequelize = new Sequelize('sqlite::memory:'); to connect data and we can use this it every files  files
// // const sequelize = require("./index");

// module.exports = (sequelize, DataTypes) => {
//     const Contact = sequelize.define('Contact', {    // Contact Model name
//         // Model attributes are defined here
//         per_address: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         cur_address: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         get() {
//             const rawValue = this.getDataValue('per_name');
//             return rawValues ? rawValue.toupperCase() : null ;
//         }
//     }, {
//         // Other model options go here
//         // sequelize, // We need to pass the connection instance
//         // modelName: 'Contact' // We need to choose the model name
//         tableName: 'contacts',
//         // timestamps : false, //
//         createdAt: false, //]
//         updatedAt: "lastUpdate"

//     });

//     return Contact;
// }

// // `sequelize.define` also returns the model
// // console.log(Contact === sequelize.models.Contact); // true
// // module.exports = Contact
