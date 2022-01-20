module.exports = (sequelize, Sequelize) => {

    const Community = sequelize.define('community', { // nombre de la tabla
        email:{
            type: Sequelize.STRING,
            unique: true
        },
        
        password:{
            type: Sequelize.STRING,
        },

        name: {   // aqui comienzas a hacer las columnas
            type: Sequelize.STRING,

        },
        type: {
            type: Sequelize.STRING,

        },
        logo: {
            type: Sequelize.STRING,
        },
        statusDelete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });

    return Community;
};