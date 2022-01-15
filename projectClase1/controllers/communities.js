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

        const find = await community.findAll();
        return res.status(200).send(find);

        //return res.status(200).send({ communities });


    } catch (error) {
        return res.status(500);
    }

};

exports.updateComunnities = async (req, res) => {
    try {

        const { body, params } = req;
        //body lo que vamos a editar, params de que vamos a editar
        if (!body)
            return res.status(40).send({ message: "Los datos son requeridos" })

        if (!body.name)
            return res.status(404).send({ message: 'name is required...' });
        if (!body.type)
            return res.status(404).send({ message: 'type is required...' });


        const validate = await community.findOne({
            where: {
                id: params.id
            }
        });


        if (!validate) return res.status(404).send({ message: "no se encontro la comunidad" });
        if (validate.statusDelete === true) return res.status(404).send({ message: 'no se encontro la comunidad' });


        validate.name = body.name;
        validate.type = body.type;
        validate.save();

        return res.status(200).send({ message: "Comunidad se actualizo correctamente" });

    } catch (error) {
        return res.status(500);
    }
};


exports.deleteComunnities = async (req, res) => {
    try {
        const { id } = req.params;

        const find = await community.findByPk(id);

        if (!find)
            return res.status(404).send({ message: "no se encontro la comunidad" });
        if (find.statusDelete === true)
            return res.status(404).send({ message: 'no se encontro la comunidad' });

        find.statusDelete=true;
        find.save();

        return res.status(200).send({ message: "Comunidad se borro correctamente" });
    } catch (error) {
        return res.status(500);
    }
}