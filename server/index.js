const express = require('express'),
    app = express(),
    port = 4005;

    app.get('/api/data', (req, res) => {
        console.log(req)
        const {userCase} = req.body
        
    })

app.listen(port, () => console.log(`Server is listening on port ${port}`));