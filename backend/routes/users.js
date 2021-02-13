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
        email: req.body.email,
        sex: req.body.sex,
    });

    try{
        const mongoUser =  await newUser.save();
        res.json(mongoUser);
    }catch(err){
        res.send('Error');
    }
})

module.exports = router;