const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema')

//Schema = Em um banco de dados o schema é a estruturacao de uma entidade em um banco de dados.
const DevSchema = new mongoose.Schema({
    name: String,
    github_username:String,
    bio: String,
    avatar_url: String,
    tecnologias: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev',DevSchema);