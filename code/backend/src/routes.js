const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); 
routes.get('/search',SearchController.index);

module.exports = routes;
/* 
------------------------------Rotas de teste-------------------------------------

routes.get('/tg', (request,response) => {
    console.log(request.query)
    //return response.send("Hello World");
    return response.json({message: "Hello World"});

});

routes.post('/tpo', (request,response) => {
    console.log(request.body)
    //return response.send("Hello World");
    return response.json({message: "Hello World"});

});

routes.put('/tpt/:id', (request,response) => {
    console.log(request.params)
    //return response.send("Hello World");
    return response.json({message: "Hello World"});
});

routes.delete('/td/:id', (request,response) => {
    console.log(request.params)
    //return response.send("Hello World");
    return response.json({message: "Hello World"});

}); */

