const router = require('express').Router();


router.get('/login', (req,res) => {
    res.json({"message": "hello"})
})




module.exports = router;