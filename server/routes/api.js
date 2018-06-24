const express = require('express');
const router = express.Router();
const User = require('../model/user');
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
    // old method
        // let userData = req.body;
        // let user = new User(userData);
        // user.save((error, registeredUser) => {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         res.status(200).send(registeredUser)
                
        //     }
        // });

        let user = new User({
            email: req.body.email,
            password: req.body.password
        });

        user.save((error, registerUserData) => {
            if (error) {
                console.log(error);
               } else {
                res.status(200).send(registerUserData);
                ;
            }
        });



    });


router.post('/login', (req, res) => {
    let userData = req.body;
    
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid email')
                } else 
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
               } else {
                   res.status(200).send(user);
               }
            }
    });

    router.get('/users', (req, res) => {
        User.find({}).exec(function(err, res) {
            if(err) throw new err;
            res.status(200).send(user);
        });
    });

    router.get('/riot', (req, res) => {
        let data = {};
        let apiKey = "RGAPI-122df3f1-b1ef-46c3-946a-0fa7486f9f8e";
        let searchName = "ASFASFASFRFG343";
        let URL = "https://eun1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + searchName + "?apiKey=" + apiKey;

        req(URL, function(err, res, body) {
            if(!err && res.status(200)) {
                let json = JSON.parse(body);
                data.id = json[searchName].id;
                data.name = json[searchName].name;
            } else {
                console.log(err);
                
            }
        });
    });



});

module.exports = router;