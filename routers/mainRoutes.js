const express = require('express');

 /*Requiero el módulo mainControllers para usarlo*/

 const mainControllers = require('../controllers/mainControllers.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

 router.get('/', mainControllers.index);
 router.get('/login', mainControllers.login);
 router.get('/register', mainControllers.register);
 router.get('/productCart', mainControllers.productCart);
 router.get('/productDetail', mainControllers.productDetail);

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;