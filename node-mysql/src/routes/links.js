const express = require('express');
const router = express.Router();
const pool = express.Router();

router.get('/add', (req, res) => {
    res.send('Form');
});

module.exports = router;