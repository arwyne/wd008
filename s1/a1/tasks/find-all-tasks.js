/*

    Instructions:

    1. Create a tasks collection under merng_tracker database
    2. For the solutions please do the ff below:

        a. For insert-tasks.js:
            Insert multiple documents inside tasks collection with the following fields:
            description, teamID, isCompleted, createdAt and updatedAt

            Insert atleast 10 documents on the tasks collection.

        b. For find-specific-fields.js:
            Retrieve the records from tasks collection and show only these specific fields:
            description, isCompleted, createdAt

        c. For Find-all-tasks.js:
            Retrieve the records from tasks collection
        
        d. For find-specific-tasks.js:
            Retrieve the records from tasks collection and show only tasks from a selected team using the team's ID



        db.teams.insertMany([
            {
                name: "Instructors Team",
                createdAt: new Date(),
                updatedAt: new Date()
                },
            {
                name: "Tech Team",
                createdAt: new Date(),
                updatedAt: new Date()
                },
            
            {
                name: "HR Team",
                createdAt: new Date(),
                updatedAt: new Date()
                }
        ])
                    

*/


/*
        c. For Find-all-tasks.js:
            Retrieve the records from tasks collection
*/

db.tasks.find()