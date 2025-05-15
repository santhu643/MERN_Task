const express = require("express");
const route = express.Router();
const bcrypt = require('bcryptjs')
const {register} = require('./model.js');
const {login} = require('./model.js');

route.post('/register',async(req,res)=>{
    const {email,pass} = req.body;
    const enpass = await bcrypt.hash(pass,10);
    const reg = await register(email,enpass);
    res.send(reg);
})

route.post('/login',async(req,res)=>{
    const {email,pass} = req.body;
    const reg = await login(email,pass);
    res.send(reg);
})

module.exports = route;