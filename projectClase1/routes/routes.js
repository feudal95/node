const express = require("express");

const enrutador = express.Router();// esta funcion lo que hace es enrutarlas rutas

const communities = require("../controllers/communities.js");
const address = require("../controllers/address.js");
const members = require("../controllers/members");
const generalities = require("../controllers/generalities");
const { verifyToken, verifyRole } = require("../middleware/authorization")

enrutador //rutas para comunidades
    .route("/communities")
    .get(verifyToken, communities.getCommunities)
    .post(communities.createCommunities);

enrutador
    .route('/communities/:id')
    .put(communities.updateComunnities)
    .delete(communities.deleteComunnities);



//rutas para address
enrutador //rutas para comunidades
    .route("/address")
    .get(verifyToken, address.getAddresses)
    .post(address.createAddresses);

enrutador
    .route('/address/:id')
    .put(address.updateAddresses)
    .delete(address.deleteAddresses);


//rutas para members
enrutador //rutas para comunidades
    .route("/members")
    .get(members.getMembers)
    .post(members.createMembers);

enrutador
    .route('/members/:id')
    .put(members.updateMembers)
    .delete(members.deleteMembers);

enrutador
    .route('/login').post(generalities.login);
//enrutador.route('/createCommunities').post(communities.createCommunities);
//enrutador.route("/getCommunities").get(communities.getCommunities);

module.exports = enrutador;