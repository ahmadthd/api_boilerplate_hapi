// Add the routes
module.exports = [
    { 
        method: 'GET', path: '/insituApiServer/status',
        handler: function (request, reply) {
            console.log(request.params);
            const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
            reply('Hello from the other side ' + user + '!');
        },
        config: {
            description: 'Test the status of the server',
            notes: 'This api end point responds with server status check',
            tags: ['api', 'api status', 'api server status', 'health check']
        }
    },
]