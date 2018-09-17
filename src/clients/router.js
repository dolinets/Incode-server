const router = require('express').Router();
const controller = require('./controller');

router
    .get('/', controller.getList)
    .get('/:id', controller.getOne)
    
module.exports = router;