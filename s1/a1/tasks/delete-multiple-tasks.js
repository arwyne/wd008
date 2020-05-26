/*
    *STRETCH GOAL*
        g. For delete-multiple-tasks.js
            Delete the tasks of the selected team, where the isCompleted is true
*/


db.tasks.deleteMany({
    teamID : {$in: [ObjectId("5eccaf988af3db5565717c82")]},
    isCompleted: {$in: [true]}
})

// db.tasks.deleteMany({
//     "teamId": "5eccaf988af3db5565717c82",
//     "isCompleted": true
// })
