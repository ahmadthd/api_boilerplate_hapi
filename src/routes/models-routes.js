const sModels = require('../methods/models_functions');

var handlers = {
    checkModel: function (request, reply) {
        sModels.exists(request, reply);
    },   
    insertModel: function (request, reply) {
        sModels.insertModel(request, reply);
    },   
    
}

// Add the routes
module.exports = [
    {  // --- Check if a model exists
        method: 'GET',
        path:'/model/exists/{modelId?}', 
        handler: handlers.checkModel,
        // handler: function (request, reply) { console.log(request.params); const modelId = request.params.modelId ? encodeURIComponent(request.params.modelId) : 'stranger';
        //     reply('Hello ' + modelId + '!'); },
        config: { description: 'Check if model exists', notes: 'The modelId parameter is required to test if the model exists', tags: ['api', 'model exists', 'check model', 'model'] }
    },
    {  // --- Create a new Model
        method: 'POST',
        path: '/model/new/',
        handler: handlers.insertModel,
        config: {
            description: 'Add new model with its name',
            notes: 'Add new model name to the database',
            tags: ['api', 'insert new model', 'new model', 'model']
        }
    },
    {  // --- Upload model files
        method: 'POST',
        path: '/upload',
        config: {
            handler: function (request, reply) {
                const payload = request.payload
                console.log(payload)
                reply('Received your data')
            },
            payload: {
                maxBytes: 209715200,
                output: 'stream',
                parse: true
            },
            description: 'Upload model files',
            notes: 'Upload multiple model files',
            tags: ['api', 'upload', 'upload multiple files']
        }
    }      
];


