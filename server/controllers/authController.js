const router = require('express').Router();


router.get('/register', (req, res) => {
    res.json({ "username": "Petar" })
})



router.get('/login', (req, res) => {
    res.json({ "username": "Stoyan" })
});







module.exports = router;