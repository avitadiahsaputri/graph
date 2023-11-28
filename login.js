// login.js

const express = require('express');
const authProvider = require('./auth/authProvider');
const { REDIRECT_URI } = require('./routes/authConfig');

const router = express.Router();

// Rute untuk login
router.get('/login', authProvider.login({
    scopes: [],
    redirectUri: REDIRECT_URI,
    successRedirect: '/acquireToken' // Setelah masuk berhasil, arahkan ke rute /acquireToken
}));

module.exports = router;
