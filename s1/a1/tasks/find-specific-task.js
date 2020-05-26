/*
    d. For find-specific-tasks.js:
            Retrieve the records from tasks collection and show only tasks from a selected team using the team's ID
*/

// Instructor's Team
db.tasks.find({teamID: ObjectId("5eccaf988af3db5565717c80")})

// Tech Team
db.tasks.find({teamID: ObjectId("5eccaf988af3db5565717c81")})

// HR Team
db.tasks.find({teamID: ObjectId("5eccaf988af3db5565717c82")})