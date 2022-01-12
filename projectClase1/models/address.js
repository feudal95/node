module.exports = (sequelize, Sequelize) => {

    const Address = sequelize.define('address', { // nombre de la tabla
        country: {   // aqui comienzas a hacer las columnas
            type: Sequelize.STRING,

        },
        state: {
            type: Sequelize.STRING,
        },

        city: {
            type: Sequelize.STRING,
        },
        statusDelete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });

    return Address;
};