const express = require("express");

const enrutador = express.Router();// esta funcion lo que hace es enrutarlas rutas

const communities = require("../controllers/communities.js");

enrutador
    .route("/communities")
    .get(communities.getCommunities)
    .post(communities.createCommunities);

enrutador
    .route('/communities/:id')
    .put(communities.updateComunnities)
    .delete(communities.deleteComunnities);


//enrutador.route('/createCommunities').post(communities.createCommunities);
//enrutador.route("/getCommunities").get(communities.getCommunities);

module.exports = enrutador;