'use strict';
var mModels = {
    exists: function (request, reply){
        console.log(request.params);
        var MongoClient = require('mongodb').MongoClient, assert = require('assert');
        // Connection URL
        var url = 'mongodb://localhost:27017/test';

        // Use connect method to connect to the server
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            

             var collection = db.collection('names');
            // Find some documents
            collection.find({}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs)
                return reply("Connected successfully to server !!! >> " + request.params.modelId + '  :  ' + docs[0].name);
            });
            db.close();
        
        });
    },
    insertModel: function (request, reply){
        return reply('Inserting New Model');
    },
    uploadFiles: function(){
        return 'Received your data'
    },
    
}

var connectDb = function(){
    // var mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost/test');
    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function() {
    //     console.log('connected')
    //     return "hello -- we're connected!";
    // })
    // return 'hello me'
    var MongoClient = require('mongodb').MongoClient, assert = require('assert');
    // Connection URL
    var url = 'mongodb://localhost:27017/myproject';

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        return ("Connected successfully to server")
        db.close();
    });
    
}

module.exports = mModels;