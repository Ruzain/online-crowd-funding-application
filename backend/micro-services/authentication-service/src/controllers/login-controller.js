const express = require('express');
const passport = require('passport');
const { findByEmail }  = require('../services/user-service');
const loginRouter = express.Router();

//@test


loginRouter.post('/', (req, res, next) => {
	//URL /api/v1/auth/login
    passport.authenticate('local', function(err, user, info) {
        
        
        
        if (err) {
        	//return next (err);
            res.json(err);
            return next(err);
        }
        


        if (info)
        {
            res.status(401).json(info);
            return next();
        }

        //Success
        res.status(200).json(user.generateJwt());

        return next();
        
    })(req, res, next);
})






module.exports = loginRouter;