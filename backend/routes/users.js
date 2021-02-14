const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', async(req,res) => {
    try{
           const users = await User.find();
           res.json(users);
    }catch(err){
        res.send('Error ' + err);
    }
})

/**
 * POST /api/users/
 */
router.post('/', async(req,res) => {
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        country: req.body.country,
        zip: req.body.zip,
        code: req.body.code,
        email: req.body.email,
        sex: req.body.sex,
        interests: req.body.interests,
    });

    try{
        const mongoUser =  await newUser.save();
        res.json(mongoUser);
    }catch(err){
        res.send('Error');
    }
})

module.exports = router;