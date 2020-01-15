const { Router} =require ('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router();
//Metodos HTTP
//get: Buscar Info; Listar Usu ou Buscar Usu
//pots Criar info; Cadastrar Usu
//put Editar Info; Editar Usu
//delete Deletar Info

   
//Tipos de Parametros
//Query Params: request.query (Filtros, Ordenação, Paginação, Busca, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body:         request.body (Dados para criação ou alteração de um registro)
 
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);
routes.delete('/devs', DevController.destroy);
routes.get('/search',SearchController.index);

module.exports = routes;