/*

    May 26

    Concepts of NoSQL  
        - not only SQL or Non SQL, it is a non-tabular and non-relational db. It stores data differently than the traditional debugger.
        - due to data volume, valocity, variety and valence Structure of NoSQL
        
    Structure of NoSQL
        - it represents data using key-value PerformanceObserverEntryList, in JSON-like Structure
        {
            attrivute/key:"value"
        }

    MongoDB and Robo3T - opensource applications/platform for NoSQL.
                        Install the MongoDB server and Robo3T

    Create DB and collections
        - To connect to our Mongo DB
            on your gitbsh, run:
                $ mongod
        - Or run Windows + R
            - then type "services.msc" thenk click ok button
            - A dialog box of service will appear, look for MongoDB and then right click then start.

    CRUD functionalities




    May 27

    Creating our NodeJS Backend:
    Run command:
        $ npm init -y
    *to initialize node application we run 'npm init -y', the -y flag means that the command will use default values instead of asking the user for input

    Intall the need packages for our backend, run command:
        $ npm install express express-graphql graphql mongoose nodemon

    express -> is a web application framework for NodeJS
    express-graphql -> to incorporate/create GraphQL server in using ExpressJS
    graphql -> for implementing the GraphQL
    mongoose -> for modelling application data contained in MongoDB
    nodemon -> that triggers automatic server restart when file changes are detected

    if you want to install a single package:
        $ npm install <package>
        ex. npm install graphql

    Set up application and it's server
    - Create a file called 'app.js'
        - app.js contains all the dependencies that we need for our application
    - require all the dependencies we need which are:
        express, to use the ExpressJs framework
        mongoose, to use the mongoose and create the structure for our applications
    - to Start a server
        $ npm run start

    Set up the models for our collections in MongoDB
    - Create a folder called "models" inside the application
    - Create the necessary Models (naming convention: singular name)
        - for this application, we created: member.js, task.js, team.js
        - create the structure for our models
            -require mongoose
            - get the mongoose Schema, we will use it for the structure of our models
            - create the necessary properties and datatypes for our models
            - don't forget to export the module as a mongoose model


-----------------------------------------------------------------------------------------------
    May 28
    GraphQL
        - data query and manipulation language
        - created by Facebook

    CLIENT -> requests to server
    server will return a response to the client <- SERVER

    with GraphQL

    CLIENT -> requests to server -> GRAPHQL <- exact data will be return to the cleient <- SERVER

    
    Why GraphQL?
    1. Good fit for complex sytems and microservices app.
    2. No over-fetching and under-fetching problems
    3. Code Sharing

    How to implement GraphQL?
    1. install GraphQL and the express-graphQL
        $ npm install graphql express-graphql
    2. Create a file called "gql-schema.js" inside our application
        - we will define here our Schema and GraphQL dependencies, objects and its structure



*/

/*
    Library Management System - books and its author

    RESTful request (get,post,delete,put,patch,resource)
    
    Route::get('/books', 'BookController@reteurnAllBooks');
        www.libraryms.com/books

    Route::get('/books/{bookId}', 'BookController@specificBook')
        www.libraryms.com/books/{bookId}
   
    Route::get('books/{bookId}/authors/{authorId}', 'BookController@specificBookandAuthor')
        www.libraryms.com/books/{bookId}/authors/{authorId}

    Route::get('/authors/{authorId}/books', 'BookController@specificAuthorandhisBooks')
        www.libraryms.com/authors/{authorId}/books

    -------------------------------------------------------------------------------------------

    GraphQL

    {
        book (id: bookid){
            title
            genre
            year_published
                author{
                    name
                        books{
                            title
                            genre
                            year_published
                        }
                }
        }
    }

*/



