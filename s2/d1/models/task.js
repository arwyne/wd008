/*
    Mongoose helps us to create a models for our database collections. With this, we can enforce some structure that we need to be implemented in our collection documents.
*/

const mongoose = require('mongoose')
/* 
    Schema maps the MongoDB collection and it defines the shape of the structure of the documents within that collection
*/

const Schema = mongoose.Schema

const taskSchema = new Schema({
    description: {type: String, required:true},
    teamID: {type: String, required:true},
    isCompleted: {type: Boolean, default:false}
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', taskSchema);
// module.exports = "Hello World!"

/*
    The module.exports includes the JS file in the NodeJS application as a module.

    module - represents as the current module (tasks.js)
    exports - is an object that will be exposed as a module.
*/