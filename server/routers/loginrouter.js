import { Router } from 'express';
import db from '../database/createConnection.js';
import bcrypt from 'bcrypt';

const router = Router();


/* Encrypt password, used for creating profile */
/* async function encryptPassword(req, res, next){
    const saltRounds = 12; //set to 12 for this project. in real life it should be random

    hashedPass = await bcrypt.hash(password, saltRounds);

    console.log("encryptPassword >>> ", hashedPass)
    next();
} */


async function comparePasswords(req, res, next){

    const user = await db.users.find({username: req.body.username}).toArray();

    //check if any user is found
    if(user.length === 0){
        res.send({ message: "Permission denied: username did not match", isLoggedIn: false });
        return
    }

    //cehck if password is correct
    const isSame = await bcrypt.compare(req.body.password, user[0].password);
    console.log("isSame >>> ", isSame)
    if(isSame){
        req.session.isLoggedIn = true;
    }
    next();
}


router.post('/api/auth', comparePasswords, (req, res) => {
    if(!req.session.isLoggedIn){
      res.send({ message: "Permission denied: password did not match", isLoggedIn: false });
        return
    }
    res.send({ isLoggedIn: true });
})

async function checkAvailability(req, res, next){
    const user = await db.users.find({username: req.body.username}).toArray();
    if(user.length === 0){
        next();
    }else{
        res.send({ message: "Username already exists", isLoggedIn: false });
        return
    }
}

async function encryptPassword(req, res, next){
    const saltRounds = 12; //set to 12 for this project. in real life it should be random

    const hashedPass = await bcrypt.hash(req.body.password, saltRounds);

    req.body.password = hashedPass;
    next();
}

async function createUser(req, res, next){
    const user = await db.users.insertOne(req.body);
    console.log(user)
    
    req.session.isLoggedIn = true;
    next();
}


router.post('/api/auth/register', checkAvailability, encryptPassword, createUser, (req, res) => {

    if(!req.session.isLoggedIn){
        res.send({ message: "Permission denied: username already exists", isLoggedIn: false });
        return
    }

    res.send({ message: "User created successfully", isLoggedIn: true });
})

export default router;