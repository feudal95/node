let communities = [];

exports.createCommunities = async (req, res) => {
    try {
        const { body } = req;

        console.log("THIS IS THE BODY", body)
        const data = {
            id: body.id,
            name: body.name,
            type: body.type,
            userLimit: body.userLimit
        };
        communities.push(...communities,data);

        return res.status(201).send({
            message: 'Comunidad creada correctamente'
        });
    } catch (error) {
        return res.status(500).send(
            message.error
        )
    };

};

exports.getCommunities = async (req, res) => {
    try {

        return res.status(200).send({ communities });


    }catch (error){
        return res.status(500);
    }

};

exports.updateComunnities = async (req, res) => {
    try{

        const {body, params} = req;
        const update = communities.find(id);

        const data =  {
            name:body
        }
        

    }catch(error){

    }
};