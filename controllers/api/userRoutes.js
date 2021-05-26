const router = require('express').Router();
const { User } = require('../../models');

// this is the /api endpoint

//GET all users
router.get('/user', async (req, res) => {
    try {
        console.log(`\n Getting all user data \n`);

        const userData = await User.findAll();
        res.status(200).json(userData);        
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;