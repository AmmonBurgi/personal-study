const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async(req, res) => {
        const db = req.app.get('db');
        const {firstName, lastName, email, password} = req.body

        const user = await db.auth.check_user(email);
        if(user[0]){
            return res.status(401).send('Email already in use!')
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.register_user(firstName, lastName, email, hash);
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },
    login: (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body;

        const user = await db.auth.check_user(email);
        if(!user[0]){
            return res.status(401).send('Email or Password are not accepted!')
        }

        let authenticated = bcrypt.compareSync(password, user[0].password)
        if(!authenticated){
            return res.status(401).send('Email or Password are not accepted!')
        }
        delete user[0].password
        req.session.user = user[0]
        res.status(202).send(req.session.user)
    }
}