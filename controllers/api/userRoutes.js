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


// PUT - modify a user by its 'id' value
router.put('/:id', async (req, res) => {
    try {

        const userData = await User.update(
            // set all attributes of user to values passed in to req.body
            { username: req.body.username,
              email: req.body.email,
              password: req.body.password },
              { individualHooks: true, 
                where: {id: req.params.id} 
            }
        )
        // if wrong id entered
        if (!userData) {
            res.status(404).json({message: 'no user found with this id'});
        } else {
            console.log(`\n Editing record id: ${req.body.id} \n`);
            res.status(200).json(userData);
        }


    } catch (err) {
        res.status(400).json(err)
    }
})


// DELETE - delete a user by its 'id' value
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