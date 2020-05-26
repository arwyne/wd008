
/*
    a. For insert-tasks.js:
            Insert multiple documents inside tasks collection with the following fields:
            description, teamID, isCompleted, createdAt and updatedAt

            Insert atleast 10 documents on the tasks collection.
*/

db.tasks.insertMany([
    {
        description: "Check Attendance",
        teamID: ObjectId("5eccaf988af3db5565717c80"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Teach Students",
        teamID: ObjectId("5eccaf988af3db5565717c80"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Grade Students",
        teamID: ObjectId("5eccaf988af3db5565717c80"),
        isCompleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Create Codes",
        teamID: ObjectId("5eccaf988af3db5565717c81"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Check Codes",
        teamID: ObjectId("5eccaf988af3db5565717c81"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Update Codes",
        teamID: ObjectId("5eccaf988af3db5565717c81"),
        isCompleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Orient Interested Enrollee",
        teamID: ObjectId("5eccaf988af3db5565717c82"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Give Entrance Exam to Interested Enrollee",
        teamID: ObjectId("5eccaf988af3db5565717c82"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Interview the Interested Enrollee",
        teamID: ObjectId("5eccaf988af3db5565717c82"),
        isCompleted: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        description: "Contract Signing with the Enrollee",
        teamID: ObjectId("5eccaf988af3db5565717c82"),
        isCompleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },
])

