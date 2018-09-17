const model = require('./model');

function getList(req, res){
    model.getList()
        .then(data => res.send(data))
        .catch(err => res.status(400).send(err));
}

function getOne(req, res){
    const id = Number(req.params.id);

    console.log('got request for one with id ' + id);
    model.getOne(id)
        .then(data => res.send(data))
        .catch(err => res.status(400).send(err));
}

module.exports = {
    getList,
    getOne
};
