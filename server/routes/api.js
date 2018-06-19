const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/user')
const db = "mongodb://root:playstation320@ds151530.mlab.com:51530/demob";

mongoose.connect(db, err => {
    if(err) {
        console.error('Error!' + err);
        } else {
            console.log('Successfully connected to mongo' + db);
            
        }
})

router.get('/', (req, res) => {
    res.send('From API router')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
})


router.post('/login', (req, res) => {
    let userData = req.body;
    
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
            
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else 
            if ( user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                res.status(200).send(user);
            }
        }
    })
})

module.exports = router;