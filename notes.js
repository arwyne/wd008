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

*/