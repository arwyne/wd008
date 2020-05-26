/*

CRUD Functionalities of NoSQL MongoDB

*/


// To insert a document in members collection

db.members.insert({
    firstname: "Sylvan",
    lastname: "Cahilog",
    position: "Instructor",
    createdAt: new Date(),
    updatedAt: new Date()

});

// To insert multiple documents in members collection

db.members.insertMany([
    {
        firstname: "Sylvan",
        lastname: "Cahilog",
        position: "Instructor",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        firstName: "Terence",
        lastName: "Gaffud",
        position: "instructor",
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// To retrieve documents in members collection

db.members.find()


// To delete document in members collection
db.members.deleteOne({ _id: ObjectID("5ecca0478af3db5565717c7c")})

/*
    To delete multiple documents in members collection
    firstName is the field of the document
    the $in operator selects the documents where the value of a field equals any value in the specified array
*/

db.members.deleteMany({
    firstName : { 
        $in: ["Ben", "Terence"] 
        }
    })
//Delete from the members where the firstName = "Ben" and "Terence"


// To update documents in members collection

db.members.update({ _id: ObjectId("5ecca0478af3db5565717c7f")},{
    $set : {
        lastName: "Doe",
        createdAt: new Date(),
        updatedAt: new Date()
        }
    })