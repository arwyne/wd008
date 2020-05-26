/*
    b. For find-specific-fields.js:
            Retrieve the records from tasks collection and show only these specific fields:
            description, isCompleted, createdAt
*/

db.tasks.find({},{ description: 1, isCompleted: 1, createdAt: 1, _id: 0 })