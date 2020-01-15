const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

//index,show,store,update,destroy

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
 


    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }


        return response.json(dev);
    },

    async update(request, response) {
        const {github_username, name, techs, bio, avatar_url } = request.body;
        const techsArray = parseStringAsArray(techs);
        let dev = await Dev.findOne({ github_username });
    

        if(!dev){
            return response.json("Usuario Não Encontrado");
        }
        else{
            dev = await Dev.updateOne({
                name,
                avatar_url,
                bio,
                techs: techsArray,
            })
            return response.json("Dados alterados com sucesso");
        }
        
        
    },

    async destroy(request, response) {
        const {github_username} = request.query;
        let user = await Dev.findOne({ github_username });
        
        
        if(!user){
            return response.json("Usuario Não Encontrado");
        }
        else{
             user = await Dev.deleteOne({ github_username });  
             return response.json("Usuario Deletado");
        }
        
        
    },
     
}