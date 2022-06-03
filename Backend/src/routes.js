const express = require('express');

const route = express.Router();

const CadastroController = require('../src/controller/CadastroController');
const ChamadoController = require('../src/controller/ChamadoController');
const EnviarController = require('../src/controller/EnviarController');

route.post('/login', CadastroController.login);

route.post('/cadastro', CadastroController.create);
route.get('/cadastro', CadastroController.read);
route.get('/cadastro/:id', CadastroController.read);
route.put('/cadastro/:id', CadastroController.update);
route.delete('/cadastro/:id', CadastroController.remove);

route.post('/chamado', ChamadoController.create);
route.get('/chamado', ChamadoController.read);
route.get('/chamado/:id', ChamadoController.read);
route.put('/chamado/:id', ChamadoController.update);
route.delete('/chamado/:id', ChamadoController.remove);

route.post('/enviar', EnviarController.create);
route.get('/enviar', EnviarController.read);
route.get('/enviar/:id', EnviarController.read);
route.put('/enviar/:id', EnviarController.update);
route.delete('/enviar/:id', EnviarController.remove);

module.exports = route;