const router = require('express').Router();
const { User } = require('../../models');

// this is at the /api endpoint


// POST - create a new user
router.post('/', async (req, res) => {
    try {
        console.log(`\n Making new user: ${req.body.username} \n`);

        const userData = await User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {
        res.status(400).json(err);
    }
});


// DELETE - delete a user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: { id: req.params.id }
        });

        // if wrong id entered
        if (!userData) {
            res.status(404).json({message: 'no user found with this id'});
        } else {
            console.log(`\n Deleting user with id: ${req.params.id} \n`);
            res.status(200).json(userData);
        }

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;