const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models/index');
const community = db.community;

const privateKey = 'Llav3Privada321.';
const expireIn = '1h';

exports.login = async (req, res) => {
    try {
        const { body } = req;

        if (!body.email) {
            return res.status(404).send({ message: 'Email es requerido' });
        }

        if (!body.password) {
            return res.status(404).send({ message: 'Password es requerido' });
        }

        const communityUser = await community.findOne({
            where: {
                email: body.email,
                statusDelete: false,
            }


        });
        if (!communityUser)
            return res.status(404).send({ message: "credenciales invalidas" });

        if (!bcrypt.compareSync(body.password, communityUser.password))
            return res.status(404).send({ message: "credenciales invalidas" });

        const response = { //esto es un objeto JSON
            // estas creando aqui el response
            id: communityUser.id,
            name: communityUser.name,
            type: communityUser.type,
            role: 3

        };
        
        let token = jwt.sign({
            community: response //payload
        },
            privateKey, // firma
            { expiresIn: expireIn }); // tiempo de vida

        return res.status(200).send({
            community: response,
            token,
        });

    } catch (error) {
        console.error(error);

    }
}