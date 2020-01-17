const axios = require('axios');
const Dev = require('../models/Dev');
const parserArrayAsString = require('../utils/parseStringAsArray')
const {findConnections,sendMessage} = require('../websocket')
/*
Controllers geralmente possuem 5 funções: index(mostrar uma lista),show(mostrar um unico elemento),store(criar),
update(alterar),destroy(deletar)
*/
module.exports = {
    async store(request,response){
        const {github_username,tecnologias,latitude,longitude} = request.body;
    
        let dev = await Dev.findOne({github_username});

        if(!dev){
            const api_response = await axios.get(`https://api.github.com/users/${github_username}`);    
        
            let {name ,login , avatar_url , bio} = api_response.data;
            if(!name){
                name = login;
            }
            const tecnologiasArray = parserArrayAsString(tecnologias);
            const location = {
                type: 'Point',
                coordinates: [longitude,latitude]
            }
        
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                tecnologias: tecnologiasArray,
                location
            });

            //Filtrar as conexoes que estao no maximo ha 10 km 
            //e que o novo dev tenha pelo menos uma das tecnoplogias filtradas
            const sendSocketMessageTo = findConnections(
                {latitude,longitude},
                tecnologiasArray,
            )

            sendMessage(sendSocketMessageTo,'new-dev',dev)

        }

        return response.json(dev);
    },

    async index(request,response){
        const devs = await Dev.find();
        
        return response.json(devs)
    }
};
