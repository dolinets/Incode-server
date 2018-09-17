const mock = require('./mock');
const syncPromise = require('../utils').syncPromise;

function getList(){
    return syncPromise(mock);
}

function getOne(id){
    const item = mock.find(item => item.id == id);
    return syncPromise(item);
}
 
 module.exports = {
    getList,
    getOne
};