const graphql = require('graphql');
const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLBoolean
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
        updatedAt: {type: GraphQLDateTime}
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
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
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
        teamID: {type: GraphQLID},
        isCompleted: {type: GraphQLBoolean},
        createdAt: {type: GraphQLDateTime},
        updatedAt: {type: GraphQLDateTime}
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
        teams: {
            type: new GraphQLList(TeamType),
            resolve: (parents, args) => {
                return Team.find({})
            }
        },
        members: {
            type: new GraphQLList(MemberType),
            resolve: (parents, args) => {
                return Member.find({})
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve: (parents, args) => {
                return Task.find({})
            }
        }
    }
})

/*
    GraphQLList - a wrapping type which points to another type. Will create a lists base on the defined fields of an Object Type
*/

module.exports = new GraphQLSchema({
    query: RootQuery
})