const socketio = require('socket.io')
const parseArrayAsString = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')

let io;
const connections = []

exports.setupWebSocket = (server) => {
    io = socketio(server)

    io.on('connection',socket =>{
        const {latitude,longitude,tecnologias} = socket.handshake.query
        
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            tecnologias: parseArrayAsString(tecnologias)
        })
    })
};  

exports.findConnections = (coordinates,tecnologias) => {
    return connections.filter(connection => {
        //Comparando as coordenadas do dev cadastrado com as coordenadas de cada conexao
        return calculateDistance(coordinates,connection.coordinates) < 10
        && connection.tecnologias.some(item => tecnologias.includes(item))
    })
}

exports.sendMessage = (to , message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message,data);
    });
}