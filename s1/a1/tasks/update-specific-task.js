/*
    e. For update-specific-task.js:
            Update the tasks of a selected team (using its team's ID). Set the isCompleted from false to true using the $set operator.

            ex. Instructors Team -> set the tasks isCompleted into "true"
*/

db.tasks.updateMany({ teamID: ObjectId("5eccaf988af3db5565717c80")},{
    $set : {
        isCompleted: true
        }
    })