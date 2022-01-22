const jwt = require('jsonwebtoken');

const privateKey = 'Llav3Privada321.';
exports.verifyToken = async (req, res, next) => {

    try {
        const token = req.get('token');

        const decoded = jwt.verify(token, privateKey);

        req.community = decoded.community;

        next();
    } catch (error) {
        return res.status(200).send({ message: 'Token no es valido' })
    }
};

exports.verifyRole = async (req, res, next) => {

    try {
        const token = req.get('token');

        const decoded = jwt.verify(token, privateKey);

        req.community = decoded.community;

        if (decoded.community.role !== 3) res.status(200).send({ message: 'permisos denegados' });

        next();
    } catch (error) {
        return res.status(200).send({ message: 'Token no es valido' })
    }
};