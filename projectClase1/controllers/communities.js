//let communities = [];

const db = require('../models/index');

const community = db.community; // este es el modelo


exports.createCommunities = async (req, res) => {
    try {
        /* // esto es para crear un array, queda obsoleto, se ingresaran datos a la BD
                const { body } = req;
        
                console.log("THIS IS THE BODY", body)
                const data = {
                    id: body.id,
                    name: body.name,
                    type: body.type,
                    userLimit: body.userLimit
                };
                communities.push(...communities,data);
        */
        const { body } = req;
        if (!body.name)
            return res.status(404).send({ message: 'name is required...' });
        if (!body.type)
            return res.status(404).send({ message: 'type is required...' });
        const create = await community.create({

            name: body.name,
            type: body.type,


        });
        return res.status(201).send({ message: 'Comunidad creada correctamente' });
    } catch (error) {
        return res.status(500).send(error);
    };

};

exports.getCommunities = async (req, res) => {
    try {

        return res.status(200).send({ communities });


    } catch (error) {
        return res.status(500);
    }

};

exports.updateComunnities = async (req, res) => {
    try {

        const { body, params } = req;
        const update = communities.find(id);

        const data = {
            name: body
        }


    } catch (error) {

    }
};