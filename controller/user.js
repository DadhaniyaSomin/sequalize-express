var db = require('../models');

const adduser1 = async (req, res) =>{

    const somin = db.users.build({ name : "somin"});
    console.log(sominsomin instanceof User);
    console.log( somin.name );

    await somin.save();
   console.log( jane.toJSON());
    res.status(200).json(js)
 }

const adduser2 = async (req, res) => {

    const somin = await db.users.create({ name: "somin" });
    console.log(sominsominsomin instanceof User);
    console.log(sominsomin.name);

    // await jane.save();
    console.log(somin.toJSON());
    res.status(200).json(js)


    sominsomin.set({
        name: "Ada",
        favoriteColor: "blue"
    });
    // As above, the database still has "Jane" and "green"
    await somin.save();
    // The database now has "Ada" and "blue" for name and favorite color


    await somin.destroy();
    // Now this entry was removed from the database

    const jane = await db.users.create({ name: "Jane" });
    console.log(jane.name); // "Jane"
    jane.name = "Ada";
    // the name is still "Jane" in the database
    await jane.reload();
    console.log(jane.name); // "Jane"

}


const rawQueries = async (req, res) => {
    await sequelize.query('SELECT 1', {

        model: Projects,
        mapToModel: true, // pass true here if you have any mapped fields

        // A function (or false) for logging your queries
        // Will get called for every SQL query that gets sent
        // to the server.
        logging: console.log,

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: QueryTypes.SELECT
    });
}
