module.exports = (sequelize, Sequelize) => {

    const Community = sequelize.define('community', { // nombre de la tabla
        name: {   // aqui comienzas a hacer las columnas
            type: Sequelize.STRING,

        },
        type: {
            type: Sequelize.STRING,

        },
        statusDelete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });

    return Community;
};