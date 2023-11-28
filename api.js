// api.js

const express = require('express');
const router = express.Router();
const isAuthenticated = require('./auth'); // Middleware autentikasi

// Rute API tanpa autentikasi
router.get('/public-resource', (req, res) => {
    res.json({ message: 'Ini adalah sumber daya publik' });
});

// Rute API yang dilindungi oleh autentikasi
router.get('/protected-resource', isAuthenticated, (req, res) => {
    res.json({ message: 'Ini adalah sumber daya yang dilindungi' });
});

module.exports = router;
