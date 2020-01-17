const Dev = require('../models/Dev');
const parserArrayAsString = require('../utils/parseStringAsArray')

module.exports = {
    async index(request,response){
        //Buscar todos os devs num raio 10km
        //Filtrar por tecnologias
        const {latitude,longitude,tecnologias} = request.query;
        
        tecnologiasArray = parserArrayAsString(tecnologias);

        const devs = await Dev.find({
            tecnologias: {
                $in: tecnologiasArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json({devs});
    }
}