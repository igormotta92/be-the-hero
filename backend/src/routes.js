const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
    Rotas / Recursos (tem relação a uma tabela do banco)
    get  / users
*/

/**
 * Métodos HTTP:
 * 
 * GET: Busca/listar uma informação no back-end
 * POST: Cria uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

/**
 * Tipo de parâmetros:
 * 
 * Query: Parâmetros nomeados (QueryString) enviados na rota após "?" (Filtros, Paginação), concatenar com "&" quando houver mais que um
 *      ex: /users?pagina=2&nome=Igor | request.query
 * Route Params: Parâmetros utilizados para identificar recursos
 *      ex: /users/:id | request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *      ex: formulário | request.body
 */

/**
 * SQL: MySql, SQLite, POstgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() | http://knexjs.org/ | npx knex init
 */

// routes.get('/', (request, response) => {
//     //res.send('Helo Word');
//     response.json({
//         evento: "Semana OmniStack 11.0",
//         aluno: "Igor Motta"
//     });
// });

routes.post('/sessions', SessionController.create); //Criação

routes.get('/ongs', OngController.index); //Listagem
routes.post('/ongs', OngController.create); //Criação

routes.get('/profile/', ProfileController.index); //Listagem de incidentes por Ong

routes.get('/incidents', IncidentController.index); //Listagem
routes.post('/incidents', IncidentController.create); //Criação
routes.delete('/incidents/:id', IncidentController.delete); //Delete

/** Roda de Login*/

module.exports = routes;