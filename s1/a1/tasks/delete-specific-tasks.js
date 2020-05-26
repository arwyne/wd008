/*
    f. For delete-specific-tasks.js
            Delete the tasks of the selected team (using is team's ID)

            ex. Tech Team -> delete all the tasks
*/


db.tasks.deleteMany({teamID: ObjectId("5eccaf988af3db5565717c81")})