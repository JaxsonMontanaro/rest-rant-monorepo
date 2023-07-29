const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    console.log(req.body)
    const user = await User.create({ 
        ...rest, 
        passwordDigest: await bcrypt.hash(password, 10)
    })
    console.log(user)
    res.json(user)
    
    if ( res.status === 400 ) { console.log( res.status(400).json(errors))}
})  

module.exports = router