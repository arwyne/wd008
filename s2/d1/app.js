/* 
    We'll declare all of our dependencies here, in order for us to implement those codes on our application
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const graphqlSchema = require("./gql-schema");

// const Task = require('./models/tasks.js')

/*
    The first line is grabbing the main Express module from the package that we installed earlier. Now, this module is a function, which we then run on the second line to create our app variable.

    'require()' function is the easiest way to include modules that exist in our node_modules or on a separate files. It reads the js files, executes it and then returns the exported objects.

    The "const app = express()" creates a new ExpressJS application for us

    The "const mongoose = require('mongoose')" is including the mongoose module for our application

*/

mongoose.connect("mongodb://localhost:27017/merng_tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Now connected to Local MongoDB Server");
});

/*
    Database Connection

    The mongoose.connect is used to connect to our local mongodb server and to database

    Due to Deprecration Warning on our mongoose.connect, we used the below command:

    { useNewUrlParser: true, useUnifiedTopology: true}
*/

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema: graphqlSchema, graphiql: true }));
/*
    The "use middleware" area of our code tells that any request must be firected at the url registered inside as argument
    - the 2nd argument calls the graphiql playground/interface with a schema called "graphqlSchema"
*/

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
  // console.log(Task)
});
/* 
    Server Initialization

    The "app.listen()" function creates the web server for Node.js at the specified host and port
*/
