const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    app = express(),
    port = 4005;

    app.get('/api/data', (req, res) => {
        console.log(req.query)
        
    })

app.listen(port, () => console.log(`Server is listening on port ${port}`));