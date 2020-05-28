/*
    Activity 1 (May27)

    Instructions:

    1. Using the previously created models, we'll create a model for the members collection
        a. Create the necessary fields on members.js by using the mongoose Schema and its datatypes.
        b. Export the members.js as mongoose model

        the fields are:
            firstName, lastName, position, createdAt and updatedAt

    2. The challenge will be to tag the firstName, lastName and position as a required field

    push the activity by 2:45pm
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    position: { type: String, required: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('Member', memberSchema)