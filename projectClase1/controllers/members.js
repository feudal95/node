const db = require('../models/index');

const members = db.members;
const community = db.community;


exports.createMembers = async (req, res) => {

    try {
        const { body } = req;
        if (!body)
            return res.status(404).send({ message: "Los datos son requeridos" });
        if (!body.fullName)
            return res.status(404).send({ message: "fullName es requerido" });
        if (!body.email)
            return res.status(404).send({ message: "email es requerido" });
        if (!body.phoneNumber)
            return res.status(404).send({ message: "phoneNumber es requerido" });
        if (!body.occupation)
            return res.status(404).send({ message: "occupation es requerido" });
        if (!body.age)
            return res.status(404).send({ message: "age es requerido" });

        const create = await members.create({

            fullName: body.fullName,
            email: body.email,
            phoneNumber: body.phoneNumber,
            occupation: body.occupation,
            age: body.age
        });

        return res.status(201).send({ message: "Miembro creado correctamente" });


    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    };

};

exports.getMembers = async (req, res) => {

    try {

        const find = await members.findAll({

            where: { statusDelete: false },

        });

        return res.status(200).send(find);

    } catch (error) {
        return res.status(500);
    }

};

exports.updateMembers = async (req, res) => {
    try {
        const { body, params } = req;
        //body lo que vamos a editar, params de que vamos a editar
        if (!body)
            return res.status(404).send({ message: "Los datos son requeridos" });
        if (!body.fullName)
            return res.send(404).send({ message: "fullName es requerido" });
        if (!body.email)
            return res.send(404).send({ message: "email es requerido" });
        if (!body.phoneNumber)
            return res.send(404).send({ message: "phoneNumber es requerido" });
        if (!body.occupation)
            return res.send(404).send({ message: "occupation es requerido" });
        if (!body.age)
            return res.send(404).send({ message: "age es requerido" });


        const validate = await members.findOne({
            where: {
                id: params.id, statusDelete: false
            },
        });


        if (!validate) return res.status(404).send({ message: "Miembro no existe" });
        if (validate.statusDelete === true) return res.status(404).send({ message: 'no se encontro el miembro' });


        validate.fullName = body.fullName;
        validate.email = body.email;
        validate.phoneNumber = body.phoneNumber;
        validate.occupation = body.occupation;
        validate.age = body.age;
        validate.save();



        return res.status(200).send({ message: "Miembro se actualizo correctamente" });

    } catch (error) {
        console.log("holaaaaaaaaaaaaaa");
        return res.status(500);
    }
};


exports.deleteMembers = async (req, res) => {
    try {
        const { id } = req.params;

        const find = await members.findByPk(id);

        if (!find)
            return res.status(404).send({ message: "no se encontro el miembro" });
        if (find.statusDelete === true)
            return res.status(404).send({ message: 'no se encontro el miembro' });

        find.statusDelete = true;
        find.save();

        return res.status(200).send({ message: "Miembro se borro correctamente" });
    } catch (error) {
        return res.status(500);
    }
}