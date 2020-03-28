const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Busca/Lista uma informação do back-end
 * POST: Cria uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

 /**
  * TIpos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados, enviados na rota apôs "?"(Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB e etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */
