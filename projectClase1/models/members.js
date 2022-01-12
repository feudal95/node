module.exports = (sequelize, Sequelize) => {

    const Member = sequelize.define('member', { // nombre de la tabla
        fullName: {   // aqui comienzas a hacer las columnas
            type: Sequelize.STRING,

        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },

        phoneNumber: {
            type: Sequelize.STRING,
        },

        occupation: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.STRING,
        },

        statusDelete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });

    return Member;
};