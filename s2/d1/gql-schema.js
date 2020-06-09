const graphql = require('graphql');
const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLNonNull
 } = graphql;

 const graphqlIsoDate = require('graphql-iso-date');
 const {
     GraphQLDateTime
 } = graphqlIsoDate

/*
    Declare graphql as dependencies

    Destructuring {} - Es6 JS expression that makes it possible to unpack values from arrays or properties from objects into a distinct variables
        - Basically, we can extract data from arrays and objects & assign them into variables
*/

const Member = require('./models/member')
const Team = require('./models/team')
const Task = require('./models/task')

/*
    Mongoose models
        - to query and mutate our documents from our Collections on our MongoDB server
*/

/*
    Define Models as GraphQL objects
*/

const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString },
        createdAt: {type: GraphQLDateTime},
        updatedAt: {type: GraphQLDateTime},
        tasks: {
            type: new GraphQLList(TaskType),
            resolve: (parent, args) => {
                return Task.find({teamID: parent.id})
            }
        }
    })
})

/*
    Activity: 05/28/2020
    1. Create a graphQLObjectType for Member and Task. Add its properties and datatypes
    2. As you may observe the createdAt and updatedAt are displayed as a strng and not as datetimes.
        Research for a package that will display the timestamps as datetimes, and install it them impement it on your application.
        Tip: search for 'graphql date'
    3. Stretch Goal: Add a query for member and task, inside the RootQuery
*/

const MemberType = new GraphQLObjectType({
    name: 'Member',
    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        position: {type: GraphQLString},
        createdAt: {type: GraphQLDateTime},
        updatedAt: {type: GraphQLDateTime}
    })
})


const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: {type: GraphQLID},
        description: {type: GraphQLString},
        teamID: {type: GraphQLString},
        isCompleted: {type: GraphQLBoolean},
        createdAt: {type: GraphQLDateTime},
        updatedAt: {type: GraphQLDateTime},
        team: {
            type: TeamType,
            resolve: (parent, args) => {
                return Team.findById(parent.teamID)
            }
        }
    })
})

/*
    GraphQLObjectType = will define our model/structure records from our MongoDB server
        - have 2 properties: name and fields
        - name, is responsible for the object name
        - field, describes the object's fields/properties

*/

/*
    Root Query - the entry point to access our data
*/

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        // To retrieve all the documents from Team Collection
        teams: {
            type: new GraphQLList(TeamType),
            /* resolve - contains the logic retrieving our documents. It has two resolvers, parents and args
                    resolver 'parent', will get the data from its parent Object Type
                    resolver 'args', will receive an arguments or data from the (). This is for creating mutations or querying specific record.
                        ex. team (arguments: value) {
                            properties/fields of the specific record
                        }
            */
            resolve: (parent, args) => {
                return Team.find({})
            }
        },
        team: {
            type: TeamType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (parent, args) => {
                return Team.findById(args.id)
            }
        },
        members: {
            type: new GraphQLList(MemberType),
            resolve: (parent, args) => {
                return Member.find({})
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve: (parent, args) => {
                return Task.find({})
            }
        },
        task: {
            type: TaskType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (parent, args) => {
                return Task.findById(args.id)
            }
        }
    }
})

/*
    GraphQLList - a wrapping type which points to another type. Will create a lists base on the defined fields of an Object Type
*/

/* 
    Mutation -  for add, update, and delete records
*/
const Mutation = new GraphQLObjectType ({
    name: 'Mutation',
    fields: {
        addTeam: {
            type: TeamType,
            args: {
                /* GraphQLNonNull will check if the value of name property is null */
                name: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: (parent, args) => {
                /* instantiate a new Team that will handle the value (args.name) for name property */
                let newTeam = new Team({
                    name: args.name,
                })
            /* Save the instantiated new Team by using its variable 'newTeam' and save method */
            return newTeam.save()
            }
        },
        updateTeam: {
            type: TeamType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                name: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: (parents, args) => {
                let teamID = {_id: args.id}
                let updateName = {name: args.name}
                // db.teams.update({_id: "id of specific team"}, {$set{name:"new Value"}})
                // findOneAndUpdate(condition, update, callback function)
                // function(team){} -> call back function, receives the result from the update which is the parameter of function(team)
                return Team.findOneAndUpdate(teamID, updateName, function(team){
                    return team
                })
            }
        },
        deleteTeam: {
            type: TeamType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args)=> {
                let teamID = { _id: args.id}

                return Team.findOneAndDelete(teamID)
            }
        },

        /*
            Activity (May 29)
            Instructions:

            1. Create a mutation to add a member
                - mutation name: addMember
                - args: firstName, lastName, position
            2. Create a mutation to add a task
                - mutation name: addTask
                - args: description, teamID
            3. Create a mutation to update Task
                - mutation name: updateTask
                - args: id
                - to update: isCompleted set to "true"
            4. Create a connection between Team to Task:
                ex. team {
                        name
                        tasks{
                            description
                            isCompleted
                        }
                }
            stretch
            5. Create a mutation to update a member
                - mutation name: updateMember
                - args: id, firstName, lastName, position
        */

        addMember: {
            type: MemberType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                position: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                let newMember = new Member({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    position: args.position
                })
            return newMember.save()
            }
        },

        // updateMember: {
        //     type: MemberType,
        //     args: {
        //         id: {type: new GraphQLNonNull(GraphQLID)},
        //         firstName: {type: new GraphQLNonNull(GraphQLString)},
        //         lastName: {type: new GraphQLNonNull(GraphQLString)},
        //         position: {type: new GraphQLNonNull(GraphQLString)}
        //     },
        //     resolve: (parents, args) => {
        //         let teamID = {_id: args.id}
        //         let firstName = {firstName: args.firstName}
        //         let lastName = {lastName: args.lastName}
        //         let position = {position: args.position}

        //         return Member.findOneAndUpdate(teamID, firstName, function(member){
        //             return member
        //         })
        //     }
        // },

        addTask: {
            type: TaskType,
            args: {
                description: {type: new GraphQLNonNull(GraphQLString)},
                teamID: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                let newTask = new Task({
                    description: args.description,
                    teamID: args.teamID
                })
            return newTask.save()
            }
        },

        updateTask: {
            type: TaskType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                isCompleted: {type: new GraphQLNonNull(GraphQLBoolean)}
            },
            resolve: (parents, args) => {
                let taskID = {_id: args.id}
                let updateTask = {isCompleted: args.isCompleted}
                return Task.findOneAndUpdate(taskID, updateTask, function(task){
                    return task
                })
            }
        },

        // solution ni mam
        // updateTask: {
        //     type: TaskType,
        //     args: {
        //         id: {type: new GraphQLNonNull(GraphQLID)}
        //     },
        //     resolve: (parents, args) => {
        //         let taskID = {_id: args.id}
        //         let updateTask = {isCompleted: true}
        //         return Task.findOneAndUpdate(taskID, updateTask)
        //     }
        // },

        deleteTask: {
            type: TaskType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args)=> {
                let taskID = { _id: args.id}
                return Task.findOneAndDelete(taskID)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
