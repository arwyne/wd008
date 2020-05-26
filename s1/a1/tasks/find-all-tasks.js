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


---------------------------------------------------------------------------------------------------------------------------

        e. For update-specific-task.js:
            Update the tasks of a selected team (using its team's ID). Set the isCompleted from false to true using the $set operator.

            ex. Instructors Team -> set the tasks isCompleted into "true"

        f. For delete-specific-tasks.js
            Delete the tasks of the selected team (using is team's ID)

            ex. Tech Team -> delete all the tasks

    *STRETCH GOAL*
        g. For delete-multiple-tasks.js
            Delete the tasks of the selected team, where the isCompleted is true
                    

*/




/*
        c. For Find-all-tasks.js:
            Retrieve the records from tasks collection
*/

db.tasks.find()