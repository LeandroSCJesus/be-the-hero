const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**Login da ONG */
routes.post('/sessions', SessionController.create);

/** Cadatro de Listagem de ONGs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** Cadastro, Listagem e Delete de Incidents */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

/**Casos Especíicos de uma ONG */
routes.get('/profile', ProfileController.index);


module.exports = routes;