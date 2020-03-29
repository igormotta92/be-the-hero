const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.number().required(),
    }) 
}), SessionController.create); //Criação

routes.get('/ongs', OngController.index); //Listagem
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required()/*.min(10).max(11)*/, /*Vê como acertar depos*/
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }) 
}), OngController.create); //Criação

routes.get('/profile/', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index); //Listagem de incidentes por Ong

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index); //Listagem

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required().greater(0),
    }) 
}), IncidentController.create); //Criação

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete); //Delete

/** Rota de Login*/

module.exports = routes;