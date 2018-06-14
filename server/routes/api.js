const express = require('express');
const router = express.Router();
const User = require('../model/user')
const mongoose = require('mongoose');
const db =  "mongodb://root:playstation320@ds151530.mlab.com:51530/demob";

mongoose.connect(db, err => {
    if (err) {
        console.log('Error' + err) 
    } else {
        console.log('Connected to mongodb');
        
    }
}) 

router.get('/', (req, res) => {
    res.send('From API route')
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
            console.log(error)
        } else {
            if(!user) {
                alert('Invalid email!')
                res.status(401).send('Invalid email')
            } else 
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
            }
        
    })

})

router.get('/events', (req, res) => {
    let events = [
        {
            "id": "2", 
            "name": "Igor",
            "desription": "human", 
            "data": "1991-10-29"
        },
        {
            "id": "3", 
            "name": "Tommy",
            "desription": "cat", 
            "data": "2015-08-01"
        }
    ]
    res.json(events);
})


router.get('/special', (req, res) => {
    let events = [
        {
            "id": "2", 
            "name": "Igor",
            "desription": "human", 
            "data": "1991-10-29"
        },
        {
            "id": "3", 
            "name": "Tommy",
            "desription": "cat", 
            "data": "2015-08-01"
        }
    ]
    res.json(events);
})

module.exports = router;