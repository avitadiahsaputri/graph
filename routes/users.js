
var express = require('express');
var router = express.Router();

var fetch = require('./fetch.js');

var { GRAPH_ME_ENDPOINT } = require('./authConfig.js');


console.log('masuk di fle users.js');

// custom middleware to check auth state
function isAuthenticated(req, res, next) {
    if (!req.session.isAuthenticated) {
        console.log('masuk ke auth singin')
        return res.redirect('/auth/signin'); // redirect to sign-in route
    }
    console.log('masuk di  file user fungstio isAuthenticated')
    next();
};

router.get('/id',
    isAuthenticated, // check if user is authenticated
    async function (req, res, next) {
        console.log('masuk di file user fungstio id')
        res.render('id', { idTokenClaims: req.session.account.idTokenClaims });
    }


);

router.get('/profile',
    isAuthenticated, // check if user is authenticated
    async function (req, res, next) {
     

        try {
            console.log('masuk di file user fungstio profile')
            const graphResponse = await fetch(GRAPH_ME_ENDPOINT, req.session.accessToken);
            res.render('profile', {
                profile: graphResponse,
                accessToken: req.session.accessToken // Sertakan access token di sini
            });
        } catch (error) {
            console.error('Error in /profile route:', error);
            next(error);
        }

    }
);

module.exports = router;