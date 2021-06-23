require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env,
    app = express(),
    port = SERVER_PORT;

    app.use(express.json());

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    }));

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db);
        console.log('db connected!')
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    });
