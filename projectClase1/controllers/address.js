const db = require('../models/index');

const address = db.address;
const community = db.community;


exports.createAddresses = async (req, res) => {

    try {
        const { body } = req;

        if (!body.country)
            return res.status(404).send({ message: "country es requerido" });
        if (!body.state)
            return res.status(404).send({ message: "state es requerido" });
        if (!body.city)
            return res.status(404).send({ message: "city es requerido" });

        const create = await address.create({

            country: body.country,
            state: body.state,
            city: body.city,
        });

        return res.status(201).send({ message: "Direccion creada correctamente" });


    } catch (error) {
        return res.status(500).send(error);
    };

};

exports.getAddresses = async (req, res) => {

    try {

        const find = await address.findAll({

            where: { statusDelete: false },

            include:{
                model:community,
            },

        });

        return res.status(200).send(find);

    } catch (error) {
        return res.status(500);
    }

};

exports.updateAddresses = async (req, res) => {
    try {
        const { body, params } = req;
        //body lo que vamos a editar, params de que vamos a editar
        if (!body)
            return res.status(404).send({ message: "Los datos son requeridos" });
        if (!body.country)
            return res.status(404).send({ message: "country es requerido" });
        if (!body.state)
            return res.status(404).send({ message: "state es requerido" });
        if (!body.city)
            return res.status(404).send({ message: "city es requerido" });


        const validate = await address.findOne({
            where: {
                id: params.id, statusDelete: false
            },
        });


        if (!validate) return res.status(404).send({ message: "Address no existe" });
        if (validate.statusDelete === true) return res.status(404).send({ message: 'no se encontro la comunidad' });


        validate.country = body.country;
        validate.state = body.state;
        validate.city = body.city;
        validate.save();



        return res.status(200).send({ message: "Address se actualizo correctamente" });

    } catch (error) {
        console.log("holaaaaaaaaaaaaaa");
        return res.status(500);
    }
};


exports.deleteAddresses = async (req, res) => {
    try {
        const { id } = req.params;

        const find = await address.findByPk(id);

        if (!find)
            return res.status(404).send({ message: "no se encontro la address" });
        if (find.statusDelete === true)
            return res.status(404).send({ message: 'no se encontro la address' });

        find.statusDelete = true;
        find.save();

        return res.status(200).send({ message: "Address se borro correctamente" });
    } catch (error) {
        return res.status(500);
    }
}